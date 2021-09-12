import { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import WebFeedComponent from './components/WebFeed'
import { useChannel } from '../utils/AblyReactEffect'
import Head from 'next/head'
import type { NextPage } from 'next'
import type { Types } from 'ably'

type FeedMessage = {
  type: string
  message: string
  timeout: number
}

const Webfeed: NextPage = (): JSX.Element => {
  const [lastMessage, setLastMessage] = useState<FeedMessage>()
  const [receivedMessages, setReceivedMessages] = useState<FeedMessage[]>([])
  const baseRef = useRef<HTMLDivElement>(null)
  const defaultMessageTimeout = 5000

  useChannel('webfeed', (message: Types.Message) => {
    if (message.name === 'feedmessage') {
      const messageParse = JSON.parse(message.data)
      setLastMessage(messageParse)
    }
  })

  useEffect(() => {
    if (lastMessage) {
      const history = receivedMessages.slice(-199)
      setReceivedMessages([...history, lastMessage])

      const containerElement = document.createElement('div')
      containerElement.className = 'pt-2 fadein'

      ReactDOM.render(
        <WebFeedComponent
          type={lastMessage.type}
          message={lastMessage.message}
        />,
        containerElement
      )
      baseRef.current?.appendChild(containerElement)

      setTimeout(() => {
        containerElement.classList.remove('fadein')
        containerElement.classList.add('fadeout')
        setTimeout(() => {
          baseRef.current?.removeChild(containerElement)
        }, 200)
      }, lastMessage.timeout | defaultMessageTimeout)
    }
  }, [lastMessage])

  return (
    <>
      <Head>
        <title>Sniffsbot Webfeed</title>
      </Head>
      <div className="base-container has-text-right is-size-5 mr-2">
        <div ref={baseRef}></div>
      </div>
    </>
  )
}

export default Webfeed
