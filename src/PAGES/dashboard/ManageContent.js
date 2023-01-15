import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getContent from '../../R E D U X/thunk/getContent';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import deleteContent from '../../R E D U X/thunk/deleteContent';
import { useNavigate } from 'react-router-dom';

const ManageContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contents = useSelector((state) => state.contentReducer.contents)
  useEffect(() => {
    dispatch(getContent())
  }, [dispatch])
  
  return (
    <div className='managecontent-container'>
      <div className='dashboard-post-container'>
        <h2>Total Post: {contents.length}</h2>
        {
          contents.map(content => <div key={content._id}>
            <p className='each-post'>
              Title: {content.title}.....
              <FaEdit onClick={()=>navigate(`/dashboard/${content._id}`)}></FaEdit>
              <FaTrashAlt onClick={()=>dispatch(deleteContent(content._id))}></FaTrashAlt>
            </p>
          </div>)
        }
      </div>
    </div>
  )
}

export default ManageContent