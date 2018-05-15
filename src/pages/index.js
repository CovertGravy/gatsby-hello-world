import React, { Component } from "react";
import Link from "gatsby-link";
import styles from "../style/index.module.css";
import "../../node_modules/materialize-css/dist/css/materialize.css";
import { Button, Card, CardTitle } from "react-materialize";

import Box from "../components/box";
import Navbar from "../components/Navbar";

class IndexPage extends Component {
  
  state = {
    name: 'World!'
  }

  newName = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  render() {

    return (

      <div>
        <Navbar />
        <Box name={this.state.name} namechanged={this.newName} />
      </div>

    )
  }
}

export default IndexPage;
