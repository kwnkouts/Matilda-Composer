import React, { Component } from 'react';
import style from './style';
import marked from 'marked';

import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';

import PropTypes from 'prop-types';

const nodeSource = {
  beginDrag(props) {
    return {
      distribution: props.distribution
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      window.alert('You dropped '+ item.distribution + ' into ' + dropResult.name);
    }
  }

};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

class Node extends Component {

  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString());
    return { __html: rawMarkup };
  }
  render() {
    const { isDragging, connectDragSource } = this.props;
    // const opacity = isDragging ? 0.4 : 1;
    return connectDragSource(
      <div style={ style.node }>
        <h3>{this.props.distribution}</h3>
        <span dangerouslySetInnerHTML={ this.rawMarkup() } />
      </div>, { dropEffect: 'copy' }
    )
  }
}

Node.propType = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  distribution: PropTypes.string.isRequired
}

export default DragSource(ItemTypes.NODE, nodeSource, collect)(Node);
