import React from 'react';
import  s from'./Profile.module.css';

const Profile =()=>{
    return  <div className='content'>
                    <div>
                         <img src = "https://pm1.narvii.com/6583/3f00498b7a46cfbf28503081894288e9cb9a0fae_00.jpg"/>
                    </div>
                    <div>
                        ava + description
                    </div>
                    <div>
                        My post
                        <div>
                        New post
                        </div>
                            <div className={s.item}>
                            Post 1
                            </div>
                            <div className={s.item}>
                            Post 2
                            </div>
                    </div>
            </div>
           
} 

export default Profile;