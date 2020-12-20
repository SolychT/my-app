import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://pm1.narvii.com/6583/3f00498b7a46cfbf28503081894288e9cb9a0fae_00.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>
    )

}

export default ProfileInfo;