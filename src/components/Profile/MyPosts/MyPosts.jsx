import React from 'react';
import  s from'./MyPosts.module.css';
import Post from './Post/Post';



const MyPosts =()=>{
    return  (
    <div>
    My post
        
        <div>
            <textarea></textarea>
            <button>Add post</button>
            
        </div>
        <div className ={s.posts}>
            <Post message='Hello World' likesCount ='0' />
            <Post message="It's my first post" likesCount ='13'/>
           
        </div>
               
    </div>
    )   
           
} 

export default MyPosts;