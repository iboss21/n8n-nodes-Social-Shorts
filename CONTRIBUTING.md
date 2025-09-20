
# Contributing to n8n-nodes-social-shorts

Thanks for making automation less boring.

## Dev quickstart
```bash
npm i
npm run build
# link into n8n's custom dir (or mount with Docker)
mkdir -p ~/.n8n/custom/n8n-nodes-social-shorts
cp -r dist ~/.n8n/custom/n8n-nodes-social-shorts
```

## Node style
- TypeScript only.
- No heavy deps without discussion.
- Helpful error messages; bubble up Graph/YouTube/TikTok JSON.
- Keep inputs minimal and explicit. Prefer credentials over plain tokens when possible.

## PR checklist
- [ ] Works end-to-end locally
- [ ] Adds/updates README usage
- [ ] Handles errors (4xx/5xx) with clear messages
- [ ] No secrets in code or examples

## Releasing
- Bump version in `package.json`
- Create a git tag `vX.Y.Z`
- `npm publish --access public`
