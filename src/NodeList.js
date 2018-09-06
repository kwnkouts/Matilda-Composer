import React, { Component } from 'react';
import Node from './Node';
import style from './style';

class NodeList extends Component {
  render() {

    let Nodes = this.props.data.filter(node =>
      node.Distribution.toLowerCase().includes(this.props.filter.toLowerCase())
    ).map(node => {
      return (
        <Node distribution={ node.Distribution } key={ node.ComponentIdentifier }>
          { node.ComponentIdentifier }
        </Node>
      )
    })

    return (
      <div style={ style.nodeList }>
        { Nodes }
      </div>
    )
  }
}

export default NodeList;
