import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import dayjs from 'dayjs'
import { connect } from 'react-redux'
import AnimateQueue from '../components/AnimateQueue'
import ScrollDetect from '../components/ScrollDetect'
import LoadingText from '../components/LoadingText'
import store from '../store'
import { track } from '../utils/common'
import './index.scss'

const PAGE_SIZE = 15

type BlogItemType = { 
  type: 'date' | 'blog'; 
  title: string; 
  id: string;
}

const sortBlog = (blogArr: { created: Date; title: string; _id: string }[]) => {
  const list: BlogItemType[] = []

  let currentGroupCreated = ''

  blogArr.forEach(item => {
    const created = dayjs(item.created).format('YYYY年MM月')

    if (created !== currentGroupCreated) {
      currentGroupCreated = created
      list.push({ title: created, type: 'date', id: created })
    }

    list.push({ title: item.title, type: 'blog', id: item._id })
  })

  return list
}

const BlogItem = (props: {
  info: BlogItemType
  style?: React.CSSProperties
}) => {
  const { info: blog, style } = props

  return blog.type === 'date' ? (
    <div className="blog-date" style={style}>
      {blog.title}
    </div>
  ) : (
    <div className="blog-item" style={style}>
      <Link href={`/blog/${blog.id}`}>
        <a className="page-common-blog-title">{blog.title}</a>
      </Link>
    </div>
  )
}

function BlogListPage(props) {
  const {
    initBlogList,
    blogList,
    renderedBlogListNumber,
    setRenderedBlogListNumber,
    lastViewPageY,
    setLastViewPageY,
  } = props

  const [showNum, setShowNum] = useState(renderedBlogListNumber || PAGE_SIZE)
  const [loading, setLoading] = useState(false)
  const showNumRef = useRef(showNum)
  const willMount = useRef(false)

  if (!willMount.current && typeof window !== 'undefined') {
    window.scrollTo(0, lastViewPageY)
    willMount.current = true
  }

  useEffect(() => {
    track('enter-index', 'route-change')

    return () => {
      setRenderedBlogListNumber(showNumRef.current)
      setLastViewPageY(window.pageYOffset)
    }
  }, [])

  const list = sortBlog((initBlogList || blogList).list)
  const isLoadAll = list.length && showNum >= list.length

  const handleLoadMore = () => {
    if (isLoadAll) return

    const currentShowNum = showNum + PAGE_SIZE
    showNumRef.current = currentShowNum

    setShowNum(currentShowNum)
    setLoading(true)
  }

  const handleAnimateEnd = () => {
    setLoading(false)
  }

  return (
    <div className="blog-list-page page-common-container">
      <Head>
        <title>小寒的博客-博客列表</title>
      </Head>
      <ScrollDetect onScrollOut={handleLoadMore} protectTime={2000}>
        {list.slice(0, renderedBlogListNumber).map(item => {
          return <BlogItem key={item.id} info={item} />
        })}
        <AnimateQueue
          animate={true}
          interval={100}
          from={{ transform: 'translateX(100px)', opacity: 0 }}
          to={{ transform: 'translateX(0px)', opacity: 1 }}
          onAnimateEnd={handleAnimateEnd}
        >
          {list.slice(renderedBlogListNumber, showNum).map(item => {
            return <BlogItem key={item.id} info={item} />
          })}
        </AnimateQueue>

        <div className="blog-list-info">
          {isLoadAll ? '已全部加载' : loading && <LoadingText text={'滑慢点，还没加载完呢'}/>}
        </div>
      </ScrollDetect>
    </div>
  )
}

BlogListPage.getInitialProps = async () => {
  const { getBlogList } = store.dispatch.blogModel
  const initBlogList = await getBlogList()

  return { initBlogList }
}

const mapState = state => ({ ...state.blogModel, ...state.globalModel })

const mapDispatch = state => ({ ...state.blogModel, ...state.globalModel })

export default connect(mapState, mapDispatch)(BlogListPage)
