import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ChatPanel from './components/ChatPanel'
import ChatInput from './components/ChatInput'
import ChatHead from './components/ChatHead'
import Head from 'next/head'
import Router from 'next/router'
import { track } from '../../utils/common'
import Navigator from '../../components/Navigator'
import { isPC } from '../../utils/common';
import './index.scss'

function Robot(props){
  const { currentChat, initChat, clearChats, robotReply, getSelects } = props

  useEffect(() => {
    const key = Router.query.key || 'default'

    track('enter-chat', 'route-change')
    initChat(key);

    if(!isPC()) {
      document.body.style.background = '#e0f1fc'
    }

    return () => {
      clearChats()
      document.body.style.background = '#fff'
    }
  }, [])

  useEffect(() => {
    if(!currentChat) return

    if(currentChat.role === 'user') {
      robotReply(currentChat.chatId)
    }

    if(currentChat.role === 'robot') {
      getSelects(currentChat.chatId)
    }

    window.scrollTo(0, document.body.offsetHeight);
  }, [currentChat])

  return (
    <>
      <Head>
        <title>和小寒聊天</title>
      </Head>
      <div className="robot-page">
        <Navigator />

        <div className="robot-panel">
          <ChatHead />
          {/* @ts-ignore */}
          <ChatPanel/>
          <ChatInput/>
        </div>
      </div>
    </>
  )
}

Robot.getInitialProps = () => {
  return { navigator: false }
}

const mapState = state => ({ ...state.robotModel })

const mapDispatch = state => ({ ...state.robotModel })

export default connect(mapState, mapDispatch)(Robot)