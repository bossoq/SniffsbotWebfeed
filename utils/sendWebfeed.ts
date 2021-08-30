import Ably from 'ably/promises'
import { Types } from 'ably'

export type FeedMessage = {
  message: string
  timeout: number
}

const ABLY_KEY: string = process.env.ABLY_KEY || ''
const ably: Ably.Realtime = new Ably.Realtime(ABLY_KEY)
const channel: Types.RealtimeChannelPromise = ably.channels.get('webfeed')

export const sendWebfeed = (payload: FeedMessage) => {
  channel.publish({ name: 'feedmessage', data: JSON.stringify(payload) })
}
