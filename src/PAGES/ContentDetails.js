import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ContentDetails = () => {
    const [content, setContent] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://a1-content-management-server-production.up.railway.app/content/${id}`)
            .then(res => res.json())
            .then(data => setContent(data))
    }, [id])
    
    return (
        <div className="blog-container">
        <h1 className="blog-title">{content.title}</h1>
        <img className="blog-image" src={content.image} alt={content.title} />
        <p className="blog-body">{content.body}</p>
        <small className="blog-date">{content.addedDate}</small>
      </div>
    )
}

export default ContentDetails