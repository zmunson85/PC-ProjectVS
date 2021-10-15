import React from 'react';
import BlogPost from './BlogPost';
import data from './data'

export default function BlogList() {
    const blogs = data.map(blog => {
        console.log(data)
        console.log(blog)
        return (
            <BlogPost
                title={blog.title}
                subTitle={blog.subTitle}
                author={blog.author}
                date={blog.date} />
        )

    });
    return (
        <div className='allBlogs'>
            {blogs}
            <button className='btn btn-primary text-uppercase'>Old Blogs</button>
        </div>
    )
}

