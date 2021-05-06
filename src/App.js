import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Robots from './components/Robots';
import Robot from './components/Robot';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const axios = require('axios').default;

const App = (props) => {
  const [robots, setRobots] = useState([]);

  // run shortly after component mounted
  useEffect(() => {
    sendGetRequest();
  }, []);

  const sendGetRequest = async () => {
    try {
      axios
        .get('http://localhost:3001/robots')
        .then((resp) => setRobots(resp.data));
    } catch (error) {
      //catching rejected requests
      console.log(error);
    }
  };

  const turnRight = async (id) => {
    try {
      axios
        .post('http://localhost:3001/robots/right', { id: id })
        .then((resp) => sendGetRequest());
    } catch (error) {
      console.log(error);
    }
  };
  const turnLeft = async (id) => {
    try {
      axios
        .post('http://localhost:3001/robots/left', { id: id })
        .then((resp) => sendGetRequest());
    } catch (error) {
      console.log(error);
    }
  };
  const moveForward = async (id) => {
    try {
      axios
        .post('http://localhost:3001/robots/forward', { id: id })
        .then((resp) => sendGetRequest());
    } catch (error) {
      console.log(error);
    }
  };

  const addRobot = async (robotName) => {
    try {
      axios
        .post('http://localhost:3001/robots', {
          name: robotName,
        })
        .then((resp) => sendGetRequest());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Robots robots={robots} addRobot={addRobot} />}
          />
          <Route
            path="/robot/:id"
            render={(props) => {
              const robot = robots.find(
                (robot) => robot.id == props.match.params.id
              );
              // console.log(robot);
              if (robot)
                return (
                  <Robot
                    robot={robot}
                    turnRight={turnRight}
                    turnLeft={turnLeft}
                    moveForward={moveForward}
                  />
                );
              else return <NotFound />;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
