import { Fragment } from 'react'
import "./assets/style.css"

function App() {
  // THÂN COMPONENT
  let name = 'ngo anh duy';
  let blue = {color: "blue"};

  const handleClick = ()=>{
    alert('bam vao lam j');
  }

  return (
    <Fragment>
      <h1 className='title' >Hello! Minh ten {name} </h1>
      <p style={blue}>Lú luôn</p>
      <img src="" alt="" />
      <button onClick={handleClick}>Bam vao day</button>
    </Fragment>
    
  
  )
}

export default App
