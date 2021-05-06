import React from 'react';
import { Link } from 'react-router-dom';

const Robot = (props) => {
  const turnRight = (id) => {
    props.turnRight(id);
  };

  const turnLeft = (id) => {
    props.turnLeft(id);
  };

  const moveForward = (id) => {
    props.moveForward(id);
  };

  return (
    <article className="container">
      <h2>
        <Link to={'/'}>Go back</Link>
      </h2>
      <h1>{props.robot.name}</h1>
      <h2>Position</h2>
      <p>posX: {props.robot.posX}</p>
      <p>posY: {props.robot.posY}</p>
      <h2>Heading</h2>
      <p>{props.robot.heading}</p>
      <p>{props.robot.id} </p>
      {/* <button onClick={props.turnRight(props.robot.id)}>RIGHT</button>
      <button onClick={ props.turnLeft(props.robot.id)}>LEFT</button>
      <button onClick={props.moveForward(props.robot.id)}>MOVE</button> */}
      <button onClick={() => turnRight(props.robot.id)}> RIGHT </button> 
      <button onClick={() => turnLeft(props.robot.id)} >LEFT</button>
      <button onClick={() => moveForward(props.robot.id)} >MOVE</button>
    </article>
  );
};

export default Robot;
