iboss21 — Social Shorts ALL-IN-ONE

Contents:
- n8n-nodes-social-shorts/      -> community node repo (Instagram Reels working; YT/TikTok stubs)
- workflows/                    -> importable n8n JSONs + env examples
- discord-to-n8n-worker/        -> Cloudflare Worker for the /short slash command

Quick start:

1) Community node (dev install)
   cd n8n-nodes-social-shorts
   npm i
   npm run build
   mkdir -p ~/.n8n/custom/n8n-nodes-social-shorts
   cp -r dist ~/.n8n/custom/n8n-nodes-social-shorts
   # restart n8n

2) Import workflow
   - In n8n, Import -> pick workflows/n8n_discord_to_viral_short_AB_multi.json
   - Add envs from workflows/viral_short.env.example (S3_BUCKET, IG_USER_ID, etc.)
   - Create creds: OpenAI, S3, IG/FB OAuth, YouTube OAuth, Notion, (TikTok if approved)
   - Ensure ffmpeg + a system font (DejaVuSans) are installed on the n8n host

3) Discord slash command Worker
   cd discord-to-n8n-worker
   # Set DISCORD_PUBLIC_KEY and N8N_WEBHOOK_URL in wrangler.toml
   npm i
   npx wrangler deploy

Done: Use /short prompt:"Your idea" duration:55 platforms:"tiktok,ig,yt" ab:true
