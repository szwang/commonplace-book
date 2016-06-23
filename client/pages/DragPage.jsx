import React, { Component, PropTypes } from 'react';
import update from 'react/lib/update';
import DraggableNote from '../components/DraggableNote';
import DragPanel from '../components/DragPanel';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';

const styles = {
  width: '100%',
  height: '100%',
  border: '1px solid black',
  position: 'relative'
};

const boxTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);

    component.moveBox(item.id, left, top);
  }
};

@DragDropContext(HTML5Backend)
@DropTarget('box', boxTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
class DragPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: {
        'a': { top:   10, left: 80, title: 'Drag me around' },
        'b': { top: 90, left: 20, title: 'Drag me too' }
      }
    };

    const { notes } = this.props;
    console.log('in drag page', notes)
  }

  moveBox(id, left, top) {
    this.setState(update(this.state, {
      notes: {
        [id]: {
          $merge: {
            left: left,
            top: top
          }
        }
      }
    }));
  }

  render() {
    const { connectDropTarget } = this.props;
    const { notes} = this.state;

    return connectDropTarget(
      <div style={styles}>
        {Object.keys(notes).map(key => {
          const { left, top, title } = notes[key];
          return (
            <DraggableNote key={key}
                 id={key}
                 left={left}
                 top={top}>
              {title}
            </DraggableNote>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { notes, accounts } = state;

  return { 
    notes,
    accounts
  }
}

export default connect(mapStateToProps, {})(DragPage)
