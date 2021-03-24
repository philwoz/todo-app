import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("")


  const handleSubmit = (event) => {
    event.preventDefault()
    setList([...list, input])
    setInput("")
  }

  const handleDelete = (i) => {
    let tempArr = [...list]
    tempArr.splice(i, 1)
    setList(tempArr)
  }

  const handleEdit = (i) => {
    let tempArr = [...list]
    tempArr[i] = input
    setList(tempArr)
    setInput("")
  }




  return (
    <div className="App">
      {/* <button onClick={() => setList([...list,1])}></button> */}
      <form className="input-wrapper" onSubmit={handleSubmit}>
        <input className="todotxt" type="text" placeholder="Add todo or Edit todo" onChange={(event) => setInput(event.target.value)} value={input} />
        {/* <button className="submit" type="submit" value="submit" >Add Todo</button> */}
      </form>
      {list.map((item, i) => (
        <div className="todo-element">
          <p>{item}</p>
          <button onClick={() => handleDelete(i)}>Delete</button>
          <button onClick={() => handleEdit(i)}>Edit</button>
        </div>
      ))}

    </div>
  )
}



// const TodoEntry = (props) => {




export default App;
