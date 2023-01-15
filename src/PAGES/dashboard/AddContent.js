import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import postContent from '../../R E D U X/thunk/postContent';

const AddContent = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const formSubmit = (data) => {
        const content = {
            ...data,
            addedDate:new Date()
        }
        dispatch(postContent(content));
        reset();
    }
    return (
        <form onSubmit={handleSubmit(formSubmit)} className='addcontent-container'>
            <div className='input-wrapper'>
                <input type="text" placeholder=' ' className='title-input'  {...register('title', {
                    required: {
                        value: true,
                        message: 'Title is required'
                    }
                })} />
                {errors.title && <p>{errors.title.message}</p>}
                <label htmlFor="" className='title-label'>Title</label>
            </div>
            <div className='input-wrapper'>
                <input type="text" placeholder=' ' className='title-input'  {...register('body', {
                    required: {
                        value: true,
                        message: 'Body is required'
                    }
                })} />
                {errors.body && <p>{errors.body.message}</p>}
                <label htmlFor="" className='title-label'>Body</label>
            </div>
            <div className='input-wrapper'>
                <input type="text" placeholder=' ' className='title-input'  {...register('image', {
                    required: {
                        value: true,
                        message: 'Image is required'
                    }
                })} />
                {errors.image && <p>{errors.image.message}</p>}
                <label htmlFor="" className='title-label'>Image</label>
            </div>
            <input type="submit" value="Post" />
        </form>
    )
}

export default AddContent