import React, { Component } from 'react';
import style from './style';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import PropTypes from 'prop-types';

const nodeTarget = {

  canDrop(props) {
    return true;
  },

  drop() {
    return { name: 'canvas' };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    cord: monitor.getSourceClientOffset()
  };
}

class Canvas extends Component {

  render() {
    const { canDrop, isOver, connectDropTarget, cord } = this.props;

    console.log(isOver);

    return connectDropTarget(
      <div style={style.canvas}>
      </div>
    )
  }
}

Canvas.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired
}

export default DropTarget(ItemTypes.NODE, nodeTarget, collect)(Canvas)
