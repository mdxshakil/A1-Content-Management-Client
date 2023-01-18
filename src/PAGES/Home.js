import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CLEAR_FILTER, SORT_BY_FIRST_UPLOAD, SORT_BY_LAST_UPLOAD } from '../R E D U X/actionTypes/actionTypes';
import getContent from '../R E D U X/thunk/getContent';
import ContentCard from './ContentCard';

const Home = () => {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.contentReducer.contents);
  const filters = useSelector((state) => state.filterReducer.filters);
  const tag = useSelector((state) => state.filterReducer.tags);

  useEffect(() => {
    dispatch(getContent())
  }, [dispatch]);

  let content;
  let loadingElement;
  //loading element
  if (!contents.length) {
    loadingElement = <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1>Please Wait.Loading.....................</h1>
    </div>
  }
  //normal sort
  if (contents.length && (!tag.length && !filters.length)) {
    content = contents.map(content =>
      <ContentCard key={content._id} content={content}></ContentCard>)
  }
  //sort by added last
  if (contents.length && filters[0] === 'added-last') {
    content =
      contents
        .sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate))
        .map(content =>
          <ContentCard key={content._id} content={content}></ContentCard>
        )
  }
  //sort by added first
  if (contents.length && filters[0] === 'added-first') {
    content =
      contents
        .sort((a, b) => new Date(a.addedDate) - new Date(b.addedDate))
        .map(content =>
          <ContentCard key={content._id} content={content}></ContentCard>
        )
  }
  //filter by tags
  if (contents.length && tag.length) {
    content = contents
      .filter(content => content.tags
        .split(',').includes(tag))
      .map(content =>
        <ContentCard key={content._id} content={content}></ContentCard>
      )

  }
  return (
    <div>
      <div className='filter-buttons-container'>
        <button onClick={() => dispatch({ type: SORT_BY_FIRST_UPLOAD, payload: 'added-first' })} className={`${filters[0] === 'added-first' && 'active-filter'}`}>Date(Added First)</button>
        <button onClick={() => dispatch({ type: SORT_BY_LAST_UPLOAD, payload: 'added-last' })} className={`${filters[0] === 'added-last' && 'active-filter'}`}>Date(Added Last)</button>
        <button onClick={() => dispatch({ type: CLEAR_FILTER })}>Clear Tags</button>
      </div>
      <div className={`${content ? 'contents-container' : ''}`}>
        {content ? content : loadingElement}
      </div>
    </div>
  )
}

export default Home