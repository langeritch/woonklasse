#!/bin/sh
# Workaround for Next.js 16.2.x framework bug (vercel/next.js#86178)
# /_global-error prerender fails with useContext null — --debug-prerender continues past it
exec next build --debug-prerender "$@"
