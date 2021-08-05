import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'
import Typer from '../../components/Typer'
import { track } from '../../utils/common'
import './index.scss'

const content = `
## 嗨。
#### 我是小小寒，
这个网站的设计者和开发者。
很开心你能来到了我的网站。
网站的代码是开源的，这是项目的 [github地址]+(https://github.com/hanruto/dodo-blog)，记得给个star哦。
`

function Home(props) {
  const isTyperFirstRendered = props.isTyperFirstRendered

  useEffect(() => {
    track('enter-home', 'route-change')

    if (!props.isTyperFirstRenderedRef) {
      props.setIsTyperFirstRendered(true)
    }
  }, [])

  return (
    <div className="page-common-container home-page">
      <Head>
        <title>小寒的博客-首页</title>
      </Head>
      
      <div className="home-page-typer">
        <Typer content={content} rendered={isTyperFirstRendered} />
      </div>
    </div>
  )
}

const mapState = state => ({ ...state.globalModel })

const mapDispatch = state => ({ ...state.globalModel })

export default connect(mapState, mapDispatch)(Home)
