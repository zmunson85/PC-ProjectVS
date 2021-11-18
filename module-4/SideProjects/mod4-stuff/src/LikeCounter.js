import React, { useState } from 'react'
const Footer = () => {
    const [likeCount, setLikeCount] = useState(0)
    return (
        <div className='footer'>
            <button onClick={() => setLikeCount(likeCount + 1)} className='btn btn-primary'>I Code For Likes  👍  {likeCount}</button>

        </div>
    )
}

export default Footer
