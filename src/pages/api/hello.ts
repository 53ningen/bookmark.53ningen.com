import { parse } from 'node-html-parser'

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  error?: string
  iconUrl?: string
  title?: string
  dead?: boolean
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (!('url' in req.query && req.query.url)) {
    res.status(400).json({ error: 'invalid parameter' })
    return
  }
  const { url } = req.query
  if (typeof url !== 'string') {
    res.status(400).json({ error: 'invalid parameter' })
    return
  }
  try {
    const response = await fetch(url as string)
    if (response.ok) {
      const text = await response.text()
      const root = parse(text)
      const title = root.querySelector('title')?.text
      const links = root.querySelectorAll('link')
      const iconHref = links
        .find((link) => {
          const rel = link.getAttribute('rel')
          return rel === 'icon' || rel === 'shortcut icon'
        })
        ?.getAttribute('href')
      const iconUrl = resolveIconUrl(url, iconHref)
      res.status(200).json({ title, iconUrl, dead: false })
      return
    } else {
      res.status(400).json({ error: `${response.status}: ${response.statusText}` })
      return
    }
  } catch (e: any) {
    console.error(JSON.stringify(e))
    if ('code' in e && e.code === 'ENOTFOUND') {
      res.status(400).json({ error: `Could not resolve host` })
    } else if (e instanceof Error) {
      res.status(500).json({ error: e.message })
    } else {
      res.status(500).json({ error: 'service unavailable' })
    }
    return
  }
}

const resolveIconUrl = (url: string, iconHref?: string) => {
  if (!iconHref) {
    return undefined
  } else {
    try {
      const u = new URL(iconHref, url)
      return u.href
    } catch {
      return undefined
    }
  }
}
