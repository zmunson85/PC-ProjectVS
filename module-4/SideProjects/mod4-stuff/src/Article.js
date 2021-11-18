import React from 'react'
import moment from 'moment'
const Article = ({ title, snippet, date, length }) => {
    console.log(date)
    return <article className='post'>
        <h2>{title}</h2>
        <div className='post-info'>
            {/* using moment library NPM install moment --save */}
            <span>{moment(date).format('dddd, MMMM, Do,  YYYY ')}</span>
            <span>{length} min read</span>
        </div>
        <p>{snippet}</p>
    </article>
}

export default Article
