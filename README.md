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
