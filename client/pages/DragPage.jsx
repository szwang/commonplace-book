import React, { Component, PropTypes } from 'react';
import update from 'react/lib/update';
import DraggableNote from '../components/DraggableNote';
import DragPanel from '../components/DragPanel';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import { requestNotes, moveNote } from '../actions/notes';


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

    console.log(item, item.id)
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
  }

  componentDidMount() {
    const { requestNotes, accounts } = this.props;

    requestNotes(accounts.id);
  }

  moveBox(id, left, top) {
    const { notes, moveNote } = this.props;

    moveNote(id, left, top)

    // this.setState(update(notes, {
    //   notes: {
    //     [id]: {
    //       $merge: {
    //         left: left,
    //         top: top
    //       }
    //     }
    //   }
    // }));
  }

  render() {
    const { notes, accounts } = this.props;
    console.log('in drag page', notes, accounts)
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div style={styles}>

        {notes.map((val, key) => {
          console.log(key, val)
          return (
            <DraggableNote key={key}
                id={val.id}
                left={val.left}
                top={val.top}>
            <div>{val.category}</div>
            <div>{val.content}</div>
            </DraggableNote>
          )
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

export default connect(mapStateToProps, { requestNotes, moveNote })(DragPage)
