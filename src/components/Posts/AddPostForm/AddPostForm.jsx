import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import { postAdded } from '../postsSlice';
import { selectAllUsers } from '../../Users/usersSlice';
import styles from './AddPostForm.module.scss';

const cx = classNames.bind(styles);

const AddPostForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const inputRef = useRef();

    const users = useSelector(selectAllUsers);

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleChangeContent = (e) => {
        setContent(e.target.value);
    };

    const handleChangeAuthor = (e) => {
        setUserId(e.target.value);
    };

    const handleSavePost = () => {
        if (title && content) {
            dispatch(postAdded(title, content, userId));
            setTitle('');
            setContent('');
            inputRef.current.focus();
        }
    };

    const enableSave = Boolean(title) && Boolean(content) && Boolean(userId);

    return (
        <section className={cx('container')}>
            <h2 className={cx('title')}>Add New Post</h2>
            <form className={cx('form')}>
                <div className={cx('wrapper-title')}>
                    <label className={cx('label')}>Title</label>
                    <input
                        className={cx('input-title')}
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        ref={inputRef}
                        value={title}
                        onChange={handleChangeTitle}
                    />
                </div>

                <div className={cx('wrapper-author')}>
                    <label className={cx('label')}>Author</label>
                    <select id="postAuthor" value={userId} className={cx('post-author')} onChange={handleChangeAuthor}>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={cx('wrapper-content')}>
                    <label className={cx('label')}>Content</label>
                    <textarea
                        className={cx('input-content')}
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={handleChangeContent}
                    />
                </div>
                <button className={cx('button')} type="button" onClick={handleSavePost} disabled={!enableSave}>
                    Save
                </button>
            </form>
        </section>
    );
};

export default AddPostForm;
