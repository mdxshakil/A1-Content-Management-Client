import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getContent from '../R E D U X/thunk/getContent';
import ContentCard from './ContentCard';

const Home = () => {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.contentReducer.contents)
  useEffect(() => {
    dispatch(getContent())
  }, [dispatch]);
  
  let content;
  if (contents.length) {
    content =
      contents
        .sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate))
        .map(content =>
          <ContentCard key={content._id} content={content}></ContentCard>
        )
  }
  return (
    <div className='contents-container'>
      {content}
    </div>
  )
}

export default Home