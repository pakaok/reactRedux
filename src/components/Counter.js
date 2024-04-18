import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler= ()=> {
    dispatch(counterActions.increase(10))
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;
// class Counter extends Component {
//   incrementHandler(){
//     this.props.increment()
//   }
//   decrementHandler(){
//     this.props.decrement()
//   }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button >Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = (state) => ({ counter: state.counter });
// const mapDispatchToProps = (dispatch) => ({
//   increment: () => {
//     dispatch({ type: "increment" });
//   },
//   decrement: () => {
//     dispatch({ type: "decrement" });
//   },
// });
// export default connect(mapStateToProps,mapDispatchToProps)( Counter);
