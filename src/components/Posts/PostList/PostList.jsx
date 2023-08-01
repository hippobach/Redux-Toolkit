// Library
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';

// Config Myself
import { selectAllPost } from '../postsSlice';
import PostAuthor from '../PostAuthor/PostAuthor';
import PostTime from '../PostTime/PostTime';
import Reactions from '../Reactions/Reactions';
import styles from './PostList.module.scss';

const cx = classNames.bind(styles);

const PostList = () => {
    const posts = useSelector(selectAllPost);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    return (
        <section className={cx('wrapper')}>
            <div className={cx('container')}>
                <h2 className={cx('header')}>Posts List</h2>
                {orderedPosts.map((post) => (
                    <article key={post.id} className={cx('post-item')}>
                        <h3 className={cx('title')}>{post.title}</h3>
                        <p className={cx('content')}>{post.content.substring(0, 100)}</p>
                        <p className={cx('author-name')}>
                            <PostAuthor userId={post.userId} />
                            <PostTime timestamp={post.date} />
                        </p>
                        <Reactions post={post} />
                    </article>
                ))}
            </div>
        </section>
    );
};

export default PostList;
