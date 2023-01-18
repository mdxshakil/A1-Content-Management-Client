import React from 'react'
import { useSelector } from 'react-redux'
import ContentCard from './ContentCard'

const ReadingHistory = () => {
  const history = useSelector((state) => state.contentReducer.history)

  return (
    <div className='contents-container'>
      {
        history.map(content => <ContentCard key={content._id} content={content}></ContentCard>)
      }
    </div>
  )
}

export default ReadingHistory