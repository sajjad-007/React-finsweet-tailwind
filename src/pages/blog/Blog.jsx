import React from 'react'
import BlogHero from './blogSection/BlogHero'
import BlogOur from './blogSection/BlogOur'

const Blog = () => {
  return (
    <div>
      {/* // Hero section start here */}
        <BlogHero/>
      {/* // Hero section end here */}

      {/* // Our blog section start here */}
        <BlogOur/>
      {/* // Our blog section end here */}

      {/* // Problem section start here */}
      {/* // Problem section end here */}
    </div>
  )
}

export default Blog