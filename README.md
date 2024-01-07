#### [R2 Directory Listing for https://bin.prashansa.com.np/](https://bin.prashansa.com.np/)
![bin.prashansa.com.np](https://github.com/Azathothas/bin.prashansa.com.np/assets/58171889/4e097f90-f6c7-4088-b2d9-484630c743ca)
![bin.prashansa.com.np/x86_64_Linux/](https://github.com/Azathothas/bin.prashansa.com.np/assets/58171889/5fa6224e-0e4d-411a-9f98-8c8dd9f39b67)

---

> - This is a simple Directory Listing script for [Cloudflare R2](https://developers.cloudflare.com/r2/) and hosted on [Cloudflare Workers](https://workers.cloudflare.com/). 
> - Forked From [cmj2002/r2-dir-list](https://github.com/cmj2002/r2-dir-list)

---
#### Deploy (Note to Self)
```bash
!# Install Wrangler: https://developers.cloudflare.com/workers/wrangler/install-and-update/
npm install "wrangler@latest" -g

!# Clone Source
git clone --filter="blob:none" "https://github.com/Azathothas/bin.prashansa.com.np"
cd "./bin.prashansa.com.np"

!# Only "./bin.prashansa.com.np/src/config.ts" & "./bin.prashansa.com.np/wrangler.toml" are required to be modified
code "./bin.prashansa.com.np/wrangler.toml"
code "./bin.prashansa.com.np/src/config.ts"

!# Deploy
npm install ; wrangler login
wrangler deploy
```
