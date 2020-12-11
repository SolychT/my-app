import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import  s from'./Profile.module.css';

const Profile =()=>{
    return  <div className='content'>
                <div>
                        <img src = "https://pm1.narvii.com/6583/3f00498b7a46cfbf28503081894288e9cb9a0fae_00.jpg"/>
                </div>
                <div>
                    ava + description
                </div>
                <MyPosts />
            </div>
           
} 

export default Profile;