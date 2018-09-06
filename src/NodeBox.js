import React, { Component } from 'react';
import NodeList from './NodeList';
import Search from './Search';
import Canvas from './Canvas';
import NavBar from './NavBar';
import axios from 'axios';
import style from './style';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class NodeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filter : ''
     };
     this.handler = this.handler.bind(this);
  }

  handler(e) {
      e.preventDefault()
      this.setState({filter: e.target.value});
    }

  loadNodesFromServer = () => {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ data: res.data });
      })
  }

  componentDidMount() {
    this.loadNodesFromServer();
    setInterval(this.loadNodesFromServer, this.props.pollInterval);

    // setTimeout(()=> {
    //   this.setState({filter: 'dis2'});
    // },2000);
  }

  render() {
    return (
    <div>
      <NavBar />
      <div style={ style.nodeBox }>
        <Search handler = {this.handler}/>
        <NodeList data={ this.state.data } filter={this.state.filter}/>
      </div>
      <Canvas />
    </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(NodeBox)
