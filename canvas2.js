import React, { Component } from 'react';
import style from './style';
import { DropTarget } from 'react-dnd';
import PropTypes from 'prop-types';

export const ItemTypes = {
  NODE: 'node'
};

const canvasTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class Canvas extends Component {

  render() {

    const {connectDropTarget, isOver } = this.props;

    return connectDropTarget(
      <div style={style.canvas}></div>
    )
  }
}

Canvas.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.NODE, canvasTarget, collect)(Canvas)
