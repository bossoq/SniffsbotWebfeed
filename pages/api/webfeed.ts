import { sendWebfeed } from '../../utils/sendWebfeed'
import { checkHeader } from '../../utils/checkHeader'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.headers.authorization && req.body && req.method === 'POST') {
    if (checkHeader(req.headers.authorization)) {
      sendWebfeed(req.body)
      res.status(200).json({
        success: true,
        msg: req.body.message,
        timeout: req.body.timeout,
      })
    } else {
      res.status(403).json({ success: false, msg: 'unauthorized' })
    }
  } else {
    res.status(404).json({ success: false, msg: 'no data input' })
  }
}

export default handler
