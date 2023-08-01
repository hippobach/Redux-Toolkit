import { parseISO, formatDistanceToNow } from 'date-fns';
import classNames from 'classnames/bind';
import { PropTypes } from 'prop-types';

import styles from './PostTime.module.scss';

const cx = classNames.bind(styles);

const PostTime = ({ timestamp }) => {
    let timeInPast = '';

    if (timestamp) {
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        timeInPast = `${timePeriod} ago`;
    }

    return (
        <span className={cx('time')}>
            &nbsp; <i>{timeInPast}</i>
        </span>
    );
};

PostTime.propTypes = {
    timestamp: PropTypes.string,
};

export default PostTime;
