import React, { useState } from 'react';


function App() {
  // State to store the background color
  const [backgroundColor, setBackgroundColor] = useState('white');

  // Functions to change the background color
  const changeToBlue = () => setBackgroundColor('blue');
  const changeToGreen = () => setBackgroundColor('green');
  const changeToCoral = () => setBackgroundColor('red');
  const changeToYellow = () => setBackgroundColor('orange');

  return (
    <div 
      className="d-flex justify-content-center align-items-center" 
      style={{ height: '100vh', backgroundColor: backgroundColor }}
    >
      <div className="text-center">
        <h1>Click a Button to Change the Background Color!</h1>
        <div className="mt-4">
          <button className="btn btn-primary m-2" onClick={changeToBlue}>
             Blue
          </button>
          <button className="btn btn-success m-2" onClick={changeToGreen}>
             Green
          </button>
          <button className="btn btn-danger m-2" onClick={changeToCoral}>
             red
          </button>
          <button className="btn btn-warning m-2" onClick={changeToYellow}>
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
