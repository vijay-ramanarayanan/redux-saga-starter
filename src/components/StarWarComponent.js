import React, { Component } from 'react';

export default class StarWarComponent extends Component {




  render() {
    return (
      <div>
        <h1>Redux Saga</h1>
        <div>
          {!this.props.starWars.isfetchingStarWars && this.props.starWars.people.map((person, i) => <h4 key = {i} >{person.name}</h4>)}
          {this.props.starWars.isfetchingStarWars && <h1>Loading ... </h1>}

        </div>
        <button onClick = {this.props.fetchStarWarsRequest}>Load More</button>
      </div>
    );
  }
}