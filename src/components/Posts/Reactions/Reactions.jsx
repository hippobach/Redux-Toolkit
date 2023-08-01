// Library
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

// Config
import { reactionAdded } from '../postsSlice';
import styles from './Reactions.module.scss';

const cx = classNames.bind(styles);

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
};

const Reactions = ({ post }) => {
    const dispatch = useDispatch();

    const handleAddReaction = () => {
        dispatch(reactionAdded({ postId: post.id, reaction: name }));
    };

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button key={name} type="button" className={cx('reaction-button')} onClick={handleAddReaction}>
                {emoji} {post.reactions[name]}
            </button>
        );
    });

    return <div className={cx('wrapper-button')}>{reactionButtons}</div>;
};

Reactions.propTypes = {
    post: PropTypes.object,
};

export default Reactions;
