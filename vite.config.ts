import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';

interface ScannedImageEntry {
  folder: string;
  fileName: string;
  path: string;
  mtimeMs: number;
}

interface ImagesManifest {
  updatedAt: number;
  folders: string[];
  files: ScannedImageEntry[];
}

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg']);

function scanAistudioImagesDir(rootDir: string): ImagesManifest {
  const imagesDir = path.resolve(rootDir, 'public/assets/aistudio/images');
  const foldersSet = new Set<string>();
  const files: ScannedImageEntry[] = [];

  if (fs.existsSync(imagesDir)) {
    const entries = fs.readdirSync(imagesDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;

      const fullPath = path.join(imagesDir, entry.name);
      if (entry.isDirectory()) {
        const folderName = entry.name;
        foldersSet.add(folderName);

        const subEntries = fs.readdirSync(fullPath, { withFileTypes: true });
        for (const subEntry of subEntries) {
          if (subEntry.name.startsWith('.')) continue;
          if (subEntry.isFile()) {
            const ext = path.extname(subEntry.name).toLowerCase();
            if (IMAGE_EXTENSIONS.has(ext)) {
              const stat = fs.statSync(path.join(fullPath, subEntry.name));
              files.push({
                folder: folderName,
                fileName: subEntry.name,
                path: `./assets/aistudio/images/${folderName}/${subEntry.name}`,
                mtimeMs: Math.floor(stat.mtimeMs)
              });
            }
          }
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (IMAGE_EXTENSIONS.has(ext)) {
          const stat = fs.statSync(fullPath);
          files.push({
            folder: 'ROOT',
            fileName: entry.name,
            path: `./assets/aistudio/images/${entry.name}`,
            mtimeMs: Math.floor(stat.mtimeMs)
          });
        }
      }
    }
  }

  const folders = Array.from(foldersSet).sort((a, b) => a.localeCompare(b));
  files.sort((a, b) => {
    if (a.folder === 'ROOT' && b.folder !== 'ROOT') return -1;
    if (a.folder !== 'ROOT' && b.folder === 'ROOT') return 1;
    const folderCmp = a.folder.localeCompare(b.folder);
    if (folderCmp !== 0) return folderCmp;
    return a.fileName.localeCompare(b.fileName);
  });

  return {
    updatedAt: Date.now(),
    folders,
    files
  };
}

function aistudioImagesManifestPlugin(): Plugin {
  let projectRoot = process.cwd();

  const syncManifestFileIfChanged = () => {
    try {
      const manifest = scanAistudioImagesDir(projectRoot);
      const outPath = path.resolve(projectRoot, 'public/assets/aistudio/images-manifest.json');
      fs.mkdirSync(path.dirname(outPath), { recursive: true });

      const stablePayload = JSON.stringify(
        { folders: manifest.folders, files: manifest.files },
        null,
        2
      );

      let existingPayload = '';
      if (fs.existsSync(outPath)) {
        try {
          const parsed = JSON.parse(fs.readFileSync(outPath, 'utf-8'));
          existingPayload = JSON.stringify(
            { folders: parsed.folders || [], files: parsed.files || [] },
            null,
            2
          );
        } catch {
          existingPayload = '';
        }
      }

      if (existingPayload !== stablePayload) {
        fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2), 'utf-8');
      }
      return manifest;
    } catch {
      return { updatedAt: Date.now(), folders: [], files: [] };
    }
  };

  return {
    name: 'aistudio-images-manifest',
    configResolved(config) {
      projectRoot = config.root;
    },
    buildStart() {
      syncManifestFileIfChanged();
    },
    configureServer(server) {
      // Serve live directory scan purely from memory in dev so Vite never triggers a public/ full-page reload
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (
          url.endsWith('/assets/aistudio/images-manifest.json') ||
          url === '/__aistudio_images_manifest'
        ) {
          const manifest = scanAistudioImagesDir(projectRoot);
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
          res.end(JSON.stringify(manifest, null, 2));
          return;
        }
        next();
      });
    }
  };
}

export default defineConfig({
  // GitHub Pages 등 서브디렉토리 배포 환경에서도 정적 자산(./assets/...)이 깨지지 않도록 상대 경로 설정
  base: './',
  plugins: [react(), tailwindcss(), aistudioImagesManifestPlugin()],
});
