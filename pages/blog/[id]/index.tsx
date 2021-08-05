import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import dayjs from 'dayjs'
import Head from 'next/head'
import AnimateQueue from '../../../components/AnimateQueue'
import CommentList from '../../../components/CommentList'
import Footer from '../../../components/Footer'
import { track } from '../../../utils/common'
import store from '../../../store'
import './index.scss'

interface Props {
  blog?: {
    title: string
    _id: string
    created: string
    content: string
  }
  comments?: { total: number; list: [] }
  getComments?: Function
  commentBlog?: Function
  addViewCount?: Function
}
function BlogDetailPage(props: Props) {
  const [comment, setComment] = useState('')
  const [nickname, setNickname] = useState('')
  const { getComments, commentBlog, blog, comments, addViewCount } = props

  useEffect(() => {
    if (blog && blog._id) {
      getComments({ blogId: blog._id })
      addViewCount(blog._id)
      track('enter-blog-detail', 'route-change', { id: blog._id })
    }
  }, [])

  const handleCommentSubmit = async e => {
    e.preventDefault()

    const info = {
      content: comment,
      type: 1,
      nickname: nickname || '不愿意透漏姓名的热心网友',
      blogId: blog._id,
    }

    setComment('')
    commentBlog(info)
  }

  const handleCommentChange = e => {
    setComment(e.target.value)
  }

  return (
    <div className="blog-detail-page page-common-container">
      <Head>
        <title>{`${blog ? blog.title : '博客找不到了'}-小寒的博客`}</title>
      </Head>
      {blog ? (
        <AnimateQueue animate={true} speed={300} interval={100}>
          <h2 className="page-common-blog-title">{blog.title}</h2>
          <div className="blog-created">
            {dayjs(blog.created).format('YYYY年MM月DD日')}
          </div>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </AnimateQueue>
      ) : (
        <div>博客找不到了</div>
      )}

      <div className="page-common-section-title">写评论</div>
      <div className="blog-comment-form">
        <input
          maxLength={100}
          type="text"
          className="blog-comment-input"
          placeholder="写下你的评论..."
          onChange={handleCommentChange}
        />
        <button
          className="blog-comment-submit-button"
          onClick={handleCommentSubmit}
          disabled={!comment}
        >
          发布
        </button>
      </div>

      {comments.list && !!comments.list.length && 
        <>
          <div className="page-common-section-title comment-list-title">全部评论</div>
          <CommentList comments={comments.list} />
        </>
      }

      <Footer />
    </div>
  )
}

BlogDetailPage.getInitialProps = async ctx => {
  const blogId = ctx.query.id
  const { getBlog } = store.dispatch.blogModel
  const blog = await getBlog(blogId)

  return { blog }
}

const mapState = state => ({ ...state.blogModel })

const mapDispatch = state => ({ ...state.blogModel })

export default connect(mapState, mapDispatch)(BlogDetailPage)
