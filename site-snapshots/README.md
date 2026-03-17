# Site Snapshots

The folder `multi-market-backup-2026-03-16` stores the pre-Tennessee-only version of the site.

To restore that exact version into the active app, run:

```powershell
powershell -ExecutionPolicy Bypass -File .\site-snapshots\restore-multi-market-backup-2026-03-16.ps1
```

That script restores:

- `src`
- `.gitignore`
- `.env.example`
- `EMAILJS_SETUP.md`
- `package.json`
- `package-lock.json`
- `postcss.config.mjs`
- `next.config.ts`
