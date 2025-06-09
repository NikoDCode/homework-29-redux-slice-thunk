import { useSelector } from 'react-redux'
import { decrementAsync, incrementAsync, selectCount } from '../redux/slices/counterSlice'
import { useAppDispatch } from '../redux/store'

const Counter = () => {
  const count = useSelector(selectCount)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incrementAsync())}>Increment</button>
      <button onClick={() => dispatch(decrementAsync())}>Decrement</button>
    </div>
  )
}

export default Counter
