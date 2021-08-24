import React from 'react';
import DropTarget from './DropTarget.jsx';
import BoxItem from './BoxItem';
import shortid from 'shortid';
import { PlansContext } from '../../context/plansContext'

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
    items.push({
      uid: shortid.generate(),
      label: e.dragData.label,
      locationId: e.dragData.locationId,
      location: e.dragData.location,
      latitude: e.dragData.latitude,
      longitude: e.dragData.longitude,
      rating: e.dragData.rating,
      description: e.dragData.description,
      image: e.dragData.image,
      ranking: e.dragData.ranking,
      day: this.props.name,
    });
    this.setState({ items: items });
    e.containerElem.style.visibility = "hidden";
  };

  swap = (fromIndex, toIndex, dragData) => {
    let items = this.state.items.slice();
    const item = { label: dragData.label, uid: shortid.generate() };
    items.splice(toIndex, 0, item);
    this.setState({ items: items });
  };

  kill = (uid) => {
    let items = this.state.items.slice();
    const index = items.findIndex((item) => {
      return item.uid == uid
    });
    if (index !== -1) {
      items.splice(index, 1);
    }
    this.setState({ items: items });
  };
  plan = []
  trip = {}

  planBase = (event, planValue) => {
    event.preventDefault()

    this.state.items.map(el => {
      {
        this.plan.push(
          {
            name: el.label,
            locationId: el.locationId,
            location: el.location,
            latitude: el.latitude,
            longitude: el.longitude,
            rating: el.rating,
            description: el.description,
            image: el.image,
            ranking: el.ranking,
          }
        )

        this.trip = 
           [
            {
              day: el.day,
              places: this.plan
            }
          ]
          // [el.day]: this.plan
        

        // planValue.setPlans({...planValue.plans, ...this.trip})
        planValue.setPlans(planValue.plans.concat(this.trip))
      }
    })
  }

  render() {
    return (
      <PlansContext.Consumer>
        {
          planValue => (
            <div className="component_box">
              <p className="font-bold">{this.props.name}</p>
              <DropTarget
                onHit={this.handleDrop}
                targetKey={this.props.targetKey}
                dropData={{ name: this.props.name }}
              >

                <DropTarget
                  onHit={this.handleDrop}
                  targetKey="boxItem"
                  dropData={{ name: this.props.name }}
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
              <form onSubmit={(event) => this.planBase(event, planValue)} >
                <button className="btn btn-sm px-5  bg-blue-900 mt-2 rounded-sm" type="submit">DONE</button>
              </form>
              {/* <button className="btn btn-sm btn-primary" type="button" onClick={()=> console.log(this.trip)}>TES</button> */}

            </div>
          )
        }
      </PlansContext.Consumer>

    );
  }
}



