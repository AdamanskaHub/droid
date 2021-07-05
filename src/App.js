import React, { useEffect } from 'react';
import './App.css';



function App() {

  const [pos, setPos] = React.useState([])
  const [reporting, setReporting] = React.useState(false)

  const modifyArr = (which, what) => {
    const updatedArr = [...pos];
    if (updatedArr[which] + what === 5) {
      updatedArr[which] = 0
    }
    else if (updatedArr[which] + what === -1) {
      updatedArr[which] = 4
    } else {
      updatedArr[which] = updatedArr[which]+what;
    }
    setPos(updatedArr);
  }

  const keysHandler = (event) => {
    if (pos.length > 0) {
      if (event.keyCode === 37) {
        console.log('left ' + pos)
        modifyArr(1, -1)
      } else if (event.keyCode === 38) {
        modifyArr(0, -1)
      } else if (event.keyCode === 39) {
        modifyArr(1, 1)
      } else if (event.keyCode === 40) {
        modifyArr(0, 1)
      } 
    }
      
    };

  useEffect(() => {
    
    window.addEventListener('keydown', keysHandler);
    return () => {
      window.removeEventListener('keydown', keysHandler);
    };
  }, [keysHandler]);


  let cellsmap = []
  let x = 0
  let y = 0
  for (let i = 0; i < 25; i++){
    cellsmap.push([x, y])
    y++
    if (y === 5) { y = 0; x++}
  }
  

  const place = () => {
    setPos(cellsmap[Math.floor(Math.random() * cellsmap.length)])
  }

  const report = () => {
    setReporting(true)
  }

  return (
    <div className="App">
      <h1 >Use the keyboard arrows to move</h1>
      <button onClick={() => place()}>{pos.length > 0 ? 'Random position' : 'Add droid'}</button>
      {pos.length > 0 &&
        <button className='report' onClick={() => report()}>{ reporting ? `Droid is at ${pos[0]}, ${pos[1]}`:'Report'}</button>
      }
      
      <div className="map">
        {cellsmap.map((i) => {
          console.log('Render Placing: ' + pos)
          
          return pos[0] === i[0] && pos[1] === i[1] ?
            <div className="cell" key={i} id={i} data-testid="cell">
              <img src='./droid.png' alt="droid"/>
            </div>
            :
            <div className="cell" key={i} id={i} data-testid="cell">
            </div>
          
        })}
        
      </div>
    </div>
  );
}

export default App;
