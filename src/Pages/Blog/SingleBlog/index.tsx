import React from 'react'
import Banner from './Banner'
import Description from './Description'
import RelatedPosts from './RelatedPosts'

const BlogDetails:React.FC = () => {
  return (
    <div>
      <Banner/>
      <Description/>
      {/* <RelatedPosts/> */}
    </div>
  )
}

export default BlogDetails