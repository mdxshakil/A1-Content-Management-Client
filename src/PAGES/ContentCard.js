import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ADD_TO_READING_HISTORY, FILTER_BY_TAGS } from '../R E D U X/actionTypes/actionTypes';

const ContentCard = ({ content }) => {
    const { _id, title, body, image, addedDate, tags } = content;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const seeContentDetails = () => {
        navigate(`/content/${_id}`)
        dispatch({ type: ADD_TO_READING_HISTORY, payload: content })
    }
    const styles = {
        container: {
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '2px 2px 10px #ccc',
        },
        image: {
            width: '100%',
            maxWidth: '300px',
            borderRadius: '10px 10px 0 0',
        },
        title: {
            margin: '10px 0',
            fontSize: '20px',
            fontWeight: 'bold',
        },
        body: {
            fontSize: '18px',
            margin: '10px 0',
            color: '#555',
        },
        date: {
            color: '#555',
        },
    };

    return (
        <div style={styles.container} className='content-card'>
            <img src={image} style={styles.image} alt="post" />
            <h3 style={styles.title}>{title}</h3>
            <p style={styles.body}>{body.slice(0, 100)}...
                <small 
                    className='read-more-btn'
                    onClick={() => seeContentDetails()}>read more</small> </p>
            <small style={styles.date}>{addedDate.toString()}</small> <br />
            {
                tags.split(',').map((tag, index) => <button className='tags-btn' key={index} onClick={()=>dispatch({type:FILTER_BY_TAGS, payload:tag})}>{tag}</button>)
            }
        </div>
    )
}

export default ContentCard