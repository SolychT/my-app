import React from 'react';
import  s from'./Post.module.css';

const Post =()=>{
    return  (
        <div className={s.item}>
            <img src='data:image/jpeg;base64,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'/>
            Post 1
            <div>
                <span>
                    like
                </span>
            </div>
        </div>
    ) 
           
          
           
} 

export default Post;