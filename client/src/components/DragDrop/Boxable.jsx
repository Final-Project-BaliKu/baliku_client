import React from 'react';
// var shortid = require('shortid');
// import  {DragDropContainer}  from '../../src/index.jsx';
import DragDropContainer from './DragDropContainer.jsx'
import DropTarget from './DropTarget.jsx';

/*
   INI HALAMAN HEADER YANG ADA GAMBAR
*/

export default class Boxable extends React.Component {
  render() {
      return (
        <div className="boxable_component" style={{display: 'inline-block'}}>
          <DragDropContainer
            targetKey={this.props.targetKey}
            dragData={{
              label: this.props.label,
              locationId: this.props.locationId,
              location: this.props.location,
              latitude: this.props.latitude,
              longitude: this.props.longitude,
              rating: this.props.rating,
              description: this.props.description,
              image: this.props.image,
              ranking: this.props.ranking,
              cost: this.props.cost
            }}
            customDragElement={this.props.customDragElement}
            // onDragStart={()=>(console.log('start'))}
            // onDrag={()=>(console.log('dragging'))}
            // onDrop={()=>(console.log('end'))}
            onDragEnd={()=>(this.props.calculatedCost(this.props.cost))}
    
          >
            <img src={this.props.image} height="45" style={{ marginLeft: 40}}/>
          </DragDropContainer>
        </div>
      );
    }
  }