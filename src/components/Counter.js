
import{useSelector, useDispatch} from 'react-redux'

import classes from './Counter.module.css';

const Counter = () => {
  const dispacth = useDispatch();
const counter = useSelector(state => state.counter);
const show = useSelector(state => state.showCounter)

const incrementHandler = () => {
  dispacth({type:'increment'});
}

const increaseHandler = () => {
  dispacth({type:'increase', amount: 5})
}


const decrementHandler = () => {
  dispacth({type:'decrement'});
}
  const toggleCounterHandler = () => {
    dispacth({type:'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decremnt</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
 
export default Counter;
