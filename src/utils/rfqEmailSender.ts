import { CompanyInfo, DEFAULT_COMPANY_INFO } from '../data/companyStore';

export const FORMSUBMIT_TOKEN = '13192ad4297568a6fadaeba02ce706e1';
export const FORMSUBMIT_ACTION_URL = `https://formsubmit.co/${FORMSUBMIT_TOKEN}`;
export const FORMSUBMIT_AJAX_URL = `https://formsubmit.co/ajax/${FORMSUBMIT_TOKEN}`;
export const DEFAULT_RFQ_SUBJECT = '[DAWOO FA] 신규 견적 문의 요청서 접수';

export interface RfqSubmissionPayload {
  referenceId: string;
  company: string;
  name: string;
  email: string;
  phone: string;
  categoryLabel?: string;
  modelInterest: string;
  urgencyLabel?: string;
  notes: string;
  source: 'contact_page' | 'rfq_modal';
}

/**
 * Returns comma-separated CC emails if configured in companyInfo
 */
export function buildRfqCcEmails(companyInfo: CompanyInfo = DEFAULT_COMPANY_INFO): string {
  const ccSet = new Set<string>();
  const primary = (companyInfo?.email || '').trim();
  const sales = (companyInfo?.salesEmail || '').trim();

  if (primary && primary.includes('@') && primary !== 'contact@dawoofavina.com') {
    ccSet.add(primary);
  }
  if (sales && sales.includes('@') && sales !== 'sales@dawoofavina.com') {
    ccSet.add(sales);
  }

  return Array.from(ccSet).join(',');
}

/**
 * Sends the RFQ form data asynchronously via FormSubmit's verified token endpoint
 * (`https://formsubmit.co/13192ad4297568a6fadaeba02ce706e1`) without redirecting
 * away from the page or requiring activation confirmation.
 */
export async function submitRfqViaFormSubmit(
  payload: RfqSubmissionPayload,
  companyInfo: CompanyInfo = DEFAULT_COMPANY_INFO
): Promise<{
  success: boolean;
  referenceId: string;
}> {
  const ccEmails = buildRfqCcEmails(companyInfo);
  const timestamp = new Date().toLocaleString('ko-KR', {
    timeZone: 'Asia/Ho_Chi_Minh',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });

  const formFields: Record<string, string> = {
    _captcha: 'false',
    _subject: DEFAULT_RFQ_SUBJECT,
    _template: 'table',
    _replyto: payload.email,
    '접수번호 (Reference ID)': payload.referenceId,
    '접수일시 (Timestamp)': `${timestamp} (베트남 현지시간)`,
    '회사명 (Company)': payload.company,
    '담당자명 (Contact Name)': payload.name,
    '연락처 (Phone / Zalo)': payload.phone,
    '회신이메일 (Customer Email)': payload.email,
    '관심제품군 (Category)': payload.categoryLabel || 'FA 자동화 부품',
    '검토모델명 및 수량 (Model & Qty)': payload.modelInterest || '-',
    '희망납기일정 (Urgency)': payload.urgencyLabel || '일반 문의',
    '상세문의내용 (Notes)': payload.notes.trim() || '-'
  };

  if (ccEmails) {
    formFields._cc = ccEmails;
  }

  try {
    // 1. Primary async submission via FormSubmit AJAX token endpoint
    const ajaxResponse = await fetch(FORMSUBMIT_AJAX_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formFields)
    });

    if (ajaxResponse.ok) {
      return {
        success: true,
        referenceId: payload.referenceId
      };
    }

    // 2. Fallback async FormData POST to https://formsubmit.co/13192ad4297568a6fadaeba02ce706e1
    const formData = new FormData();
    Object.entries(formFields).forEach(([key, val]) => {
      formData.append(key, val);
    });

    const fallbackResponse = await fetch(FORMSUBMIT_ACTION_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: formData
    });

    return {
      success: fallbackResponse.ok,
      referenceId: payload.referenceId
    };
  } catch {
    return {
      success: false,
      referenceId: payload.referenceId
    };
  }
}
