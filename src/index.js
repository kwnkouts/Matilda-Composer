import React from 'react';
import ReactDOM from 'react-dom';
import NodeBox from './NodeBox';
// import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <NodeBox
    url='http://localhost:3001/api/nodes'
    pollInterval={2000} />,
  document.getElementById('root')
);
