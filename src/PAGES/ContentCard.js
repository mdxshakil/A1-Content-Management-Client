import React from 'react'
import { useNavigate } from 'react-router-dom';

const ContentCard = ({ content }) => {
    const {_id, title, body, image, addedDate } = content;
    const navigate = useNavigate();
    const seeContentDetails = () =>{
        navigate(`/content/${_id}`)
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
        <div style={styles.container} className='content-card' onClick={()=>seeContentDetails()}>
            <img src={image} style={styles.image} alt="post" />
            <h3 style={styles.title}>{title}</h3>
            <p style={styles.body}>{body}</p>
            <small style={styles.date}>{addedDate.toString()}</small>
        </div>
    )
}

export default ContentCard