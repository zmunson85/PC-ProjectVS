import React from 'react'
import moment from 'moment'
const Header = ({ date }) => {
    return (
        <div className='headerInfo'>
            <h4 className='post'>Vschool: Zachary Munson {moment(date).format('dddd, MMMM, Do,  YYYY h:mm:ss a')}</h4>
        </div>
    )
}

export default Header
