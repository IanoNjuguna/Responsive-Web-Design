import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  const Display = ({ counter }) => {
    return (
      <div>
        <h1>
          {counter}
        </h1>
      </div>
    )
  }

  const Button = ({ onClick, text }) => {
    return (
      <button onClick={onClick}>
        {text}
      </button>
    )
  }
  
  return (
    <div>
      <Display counter={counter} />
      <Button
        onClick={increaseByOne}
        text='+'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />
      <Button
        onClick={decreaseByOne}
        text='-'
      />
    </div>
  )
}

export default App