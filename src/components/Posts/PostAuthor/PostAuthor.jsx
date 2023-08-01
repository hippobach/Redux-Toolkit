import classNames from 'classnames/bind';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import { selectAllUsers } from '../../Users/usersSlice';
import styles from './PostAuthor.module.scss';

const cx = classNames.bind(styles);

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);

    const author = users.find((user) => user.id === userId);

    return <span className={cx('author-name')}>by {author ? author.name : 'Unknown Author'}</span>;
};

PostAuthor.propTypes = {
    userId: PropTypes.number,
};

export default PostAuthor;
