import { useState } from 'react';
import classnames from 'classnames/bind';
import styles from './Counter.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';

const cx = classnames.bind(styles);

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const handleResetCounter = () => {
        setIncrementAmount(0);
        dispatch(reset());
    };

    const handleIncrementAmount = (e) => {
        setIncrementAmount(e.target.value);
    };

    return (
        <section className={cx('wrapper')}>
            <div className={cx('container')}>
                <p className={cx('title-number')}>Counter: {count}</p>
                <div className={cx('header-button')}>
                    <button onClick={() => dispatch(increment())} className={cx('btn')}>
                        +
                    </button>
                    <button onClick={() => dispatch(decrement())} className={cx('btn')}>
                        -
                    </button>
                </div>
                <input
                    type="text"
                    value={incrementAmount}
                    className={cx('input-number')}
                    onChange={handleIncrementAmount}
                />
                <div className={cx('footer-button')}>
                    <button onClick={() => dispatch(incrementByAmount(addValue))} className={cx('btn')}>
                        Add Amount
                    </button>
                    <button onClick={handleResetCounter} className={cx('btn')}>
                        Reset
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Counter;
