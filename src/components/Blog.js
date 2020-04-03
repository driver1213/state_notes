import React from 'react'

const Blog = (props) => {
  return (
    <>
        Blog
        <br/>
        {props.match.params.blogID}
    </>
  )
}

export default Blog
