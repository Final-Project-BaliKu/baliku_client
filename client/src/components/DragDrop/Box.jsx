import React from 'react';
import DropTarget from './DropTarget.jsx';
import BoxItem from './BoxItem';
var shortid = require('shortid');
// import { DragDropContainer, DropTarget } from '../../src/index.jsx';
// import DragDropContainer from '../DragDropContainer.jsx'

export default class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items: []
      };
    }
    handleDrop = (e) => {
      let items = this.state.items.slice();
      items.push({label: e.dragData.label, uid: shortid.generate(), day: this.props.name});
      this.setState({items: items});
      e.containerElem.style.visibility="hidden";
    };
  
    swap = (fromIndex, toIndex, dragData) => {
      let items = this.state.items.slice();
      const item = {label: dragData.label, uid: shortid.generate()};
      items.splice(toIndex, 0, item);
      this.setState({items: items});
    };
  
    kill = (uid) => {
      let items = this.state.items.slice();
      const index = items.findIndex((item) => {
        return item.uid == uid
      });
      if (index !== -1) {
        items.splice(index, 1);
      }
      this.setState({items: items});
    };

    yoi = (event) => {
      event.preventDefault()
      this.state.items.map(el => {
        {
          console.log(el.label, el.day)
        }
      })
    }
  
    render() {
      
      return (
        <div className="component_box">
            <p className="font-bold">{this.props.name}</p>
            <DropTarget
              onHit={this.handleDrop}
              targetKey={this.props.targetKey}
              dropData={{name: this.props.name}}
            >
              
              <DropTarget
                onHit={this.handleDrop}
                targetKey="boxItem"
                dropData={{name: this.props.name}}
              >
                <div className="box box-content  p-5">
                  {this.state.items.map((item, index) => {
                    return (
                      <BoxItem key={item.uid} uid={item.uid} kill={this.kill} index={index} swap={this.swap}>
                        {item.label}
                      </BoxItem>
                    )
                  })}
                </div>
              </DropTarget>
            </DropTarget>
            <form onSubmit={(event) => this.yoi(event)} >
              <button className="btn btn-sm px-5  bg-blue-900 mt-2 rounded-sm" type="submit">DONE</button>
            </form>
        </div>
      );
    }
  }