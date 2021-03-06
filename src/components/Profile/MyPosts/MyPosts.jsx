import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

    let posts = [
        {id: 1, post: 'Hello World', likesCount: 0},
        {id: 2, post: 'It\'s my first post', likesCount: 13},
    ]

    let postsElements = posts.map ( p => <Post message={p.post} likesCount={p.likesCount} />)

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>

            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}

            </div>

        </div>
    )

}

export default MyPosts;