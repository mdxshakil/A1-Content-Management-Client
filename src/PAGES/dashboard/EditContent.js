import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import updateContent from '../../R E D U X/thunk/updateContent';

const EditContent = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [{ title, body, image }, setContent] = useState({});
    const {register,handleSubmit} = useForm();
    useEffect(() => {
        fetch(`http://localhost:5000/content/${id}`)
            .then(res => res.json())
            .then(data => setContent(data))
    }, [id])
    const onSubmit = (data) =>{
        const updatedData = {
            title: data.title ? data.title : title,
            body: data.body ? data.body : body,
            image: data.image ? data.image : image,
        }
        dispatch(updateContent(id, updatedData));
        navigate('/dashboard/managecontent')
    }
    return (
        <div className='editcontent-container'>
            <div>
                <h2>Previous Content</h2>
                <h3>{title}</h3>
                <p>{body}</p>
                <img src={image} alt="Not available" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='Title' {...register('title')} />
                <input type="text" placeholder='Body' {...register('body')}/>
                <input type="text" placeholder='Image' {...register('image')}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditContent