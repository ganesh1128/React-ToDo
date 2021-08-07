import './App.css';
import React, { useState } from 'react';

function App() {
  const [list,setList] = useState([
    {
      id: 1,
      taskName: "Go to Office",
      isDone: false
    },
    {
      id: 2,
      taskName: "Have Lunch",
      isDone: false
    },
    {
      id: 3,
      taskName: "Completed Work",
      isDone: false
    },
    {
      id: 4,
      taskName: "Came Home",
      isDone: false
    },
    {
      id: 5,
      taskName: "Have Dinner",
      isDone: false
    }      
  ])


  let changeStatus = (id,checkStatus) => {
    let taskIndex = list.findIndex((obj) => obj.id === id);
   checkStatus ?  list[taskIndex].isDone = true : list[taskIndex].isDone = false;
    setList([...list])
  }

  
  return (
    <div className="container">
    <ul>
      {
        list.map((ele) => {
          return <li type="none" style={{textDecoration: ele.isDone ? "line-through" : " "}}><input type="checkbox"
          onChange={(e) => {changeStatus(ele.id, e.target.checked)}} /> {ele.taskName} </li>
          
        })
      }
    </ul>

    </div>
  );
 
  
}

export default App;
