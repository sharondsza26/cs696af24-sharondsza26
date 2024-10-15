import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

function Intro() {
  const [counter, setCounter] = useState(10);

  function incrementCounter(){
    setCounter(counter + 1);
  }

  function decrementCounter(){
    setCounter(counter - 1);
  }

  useEffect(() => {
    fetch('http://localhost:9000')
    .then(response => response.text())
    .then(response => console.log(response))
    .catch(error => console.error(error));

  }, []
    
  );

  return (
    <div>Just another page: current: {counter}
    <Button onClick={incrementCounter}> Increase Value </Button>
    <Button variant="warning" onClick={decrementCounter}> Decrease Value </Button>
    </div>
  );
}

export default Intro;