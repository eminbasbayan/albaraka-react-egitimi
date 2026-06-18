import { useDispatch, useSelector } from 'react-redux';
import { arttir, azalt } from '../redux/counterSlice';

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log(count);
  

  return (
    <div>
      <button onClick={() => dispatch(arttir())}>Arttır</button>
      <b>{count}</b>
      <button onClick={()=> dispatch(azalt())}>Azalt</button>
    </div>
  );
};

export default Counter;
