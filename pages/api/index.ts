import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from "node-fetch";
import cheerio from 'cheerio'
import youtubedl from 'youtube-dl-exec'
export default (req: NextApiRequest, res: NextApiResponse) => {

  res.status(200).json({ name: 'John Doe' })
}