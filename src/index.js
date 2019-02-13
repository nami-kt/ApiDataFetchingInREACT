import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class App extends React.Component {
  state = {
    beers: []
  };
  constructor() {
    super();
    this.getBeers();
  }

  getBeers() {
    fetch(`https://private-ee5e3-testproject72.apiary-mock.com/questions`)
      .then(data => data.json())
      .then(beers => {
        this.setState({ beers: beers.beers });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let beerNames = this.state.beers.map(beer => (
      <li>
        <strong> {beer.name}</strong>
      </li>
    ));
    return <div> {beerNames}</div>;
    //<div> {JSON.stringify(this.state.beers)}</div>
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
