import React, { Component } from 'react';
import style from './style';
import marked from 'marked';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

// react-dnd
export const ItemTypes = {
  NODE: 'node'
};

const nodeSource = {
 beginDrag(props) {
   return {nodeId: props.id}
 }
};

function collect(connect, monitor) {
 return {
   connectDragSource: connect.dragSource(),
   isDragging: monitor.isDragging()
 }
}


class Node extends Component {

  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString());
    return { __html: rawMarkup };
  }
  render() {

    const { connectDragSource, isDragging } = this.props;

    return connectDragSource(
      <div style={ style.node }>
        <h3>{this.props.distribution}</h3>
        <span dangerouslySetInnerHTML={ this.rawMarkup() } />
      </div>
    )
  }
}

Node.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.NODE, nodeSource, collect)(Node);
