import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
};

const boxSource = {
  beginDrag(props) {
    const { id, left, top } = props;
    return { id, left, top };
  }
};

@DragSource('box', boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class Box extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    children: PropTypes.node
  };

  render() {
    const { left, top, connectDragSource, isDragging, children } = this.props;
    if (isDragging) {
      return null;
    }


    return connectDragSource(
      <div style={{ ...style, left, top }}>
        {children}
      </div>
    );
  }
}