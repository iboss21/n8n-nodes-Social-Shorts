# n8n-nodes-social-shorts

**Cross-post short vertical videos from n8n** to **Instagram Reels**, **YouTube Shorts**, and **TikTok**.

- ✅ Instagram Reels: **working node** (Graph API create container → publish)
- 🧱 YouTube Shorts: scaffold (resumable upload flow to fill with your OAuth credentials)
- 🧱 TikTok: scaffold (init → upload → publish; requires approved Content Posting app)

> Goal: a single, reliable package for shortform automation. Keep it simple, documented, and battle-tested.

## Install (dev)

```bash
npm i
npm run build
# copy to your n8n custom nodes dir:
# Linux:
mkdir -p ~/.n8n/custom
cp -r dist ~/.n8n/custom/n8n-nodes-social-shorts
# or mount dist into /home/node/.n8n/custom in Docker
```

Restart n8n → search for **Instagram Reels Publisher** node.

## Instagram Reels Publisher
**Inputs**: IG Business User ID, Video URL (public or **S3 presigned**), Caption, Access Token.  
**Output**: JSON with `creationId` and publish result.

Permissions: your FB app needs `instagram_content_publish`. The **IG User ID** is the *business account ID*, not the @handle.

## Roadmap
- [ ] YouTube Shorts full OAuth + resumable upload
- [ ] TikTok Content Posting endpoints + OAuth helper
- [ ] Caption sanitizer and per-platform limits
- [ ] Upload from binary stream (no public URL)
- [ ] Cover frame selection (IG, where available)

PRs welcome! Submit issues and ideas.

---

## Install

**n8n custom nodes (recommended):**
```bash
# Build once
npm i
npm run build

# Copy dist into n8n's custom directory
mkdir -p ~/.n8n/custom/n8n-nodes-social-shorts
cp -r dist ~/.n8n/custom/n8n-nodes-social-shorts
# Then restart n8n
```

**Docker users:**
Mount `dist` into `/home/node/.n8n/custom/n8n-nodes-social-shorts`.

## Usage

1. Drag **Instagram Reels Publisher** into your workflow.
2. Provide:
   - `IG Business User ID`
   - `Video URL` (S3 presigned works best)
   - `Caption`
   - `Access Token` (with `instagram_content_publish`)
3. Execute → returns `creationId` and publish status.

### Example: Post presigned S3 video

Use S3 → Presign → Instagram Reels Publisher.  
Result: a live Reel with your caption.

## Examples

See `examples/`:
- `discord_to_viral_short.json` — Discord-triggered full pipeline (story → TTS → FFmpeg → S3 → IG/YT/TT → Notion → Discord report).
- `shortform_machine_multi.json` — Daily auto-post machine with flags per platform.

## Roadmap & Contributions

- [ ] YouTube Shorts: OAuth + resumable upload
- [ ] TikTok Content Posting: init/upload/publish with OAuth helper
- [ ] Binary upload support (no external URL)
- [ ] Cover frame selection + timestamp scrub
- [ ] Caption policy helper per platform

**Contributing:** check `CONTRIBUTING.md`. Good first issues are labeled.

## Why this node?

- Saves hours of manual uploads.
- Works with presigned URLs → secure, zero bucket exposure.
- Friendly errors from Graph API to debug perms & content moderation.

---

### Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![n8n](https://img.shields.io/badge/n8n-community%20node-blue)](#)
