import React, { Component } from "react";
import Link from "gatsby-link";
import Box from "../components/Box";
import styles from "../style/index.module.css";
import "../../node_modules/materialize-css/dist/css/materialize.css";
import { Button, Card, CardTitle } from "react-materialize";

//box

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
      <div style={{ color: 'white', background: 'teal', margin: '3rem auto', maxWidth: 600, border: '5px solid aliceblue', boxShadow: '0px 0px 4px 2px teal', padding: 10 }}>
        <h1>Hello <Box name={this.state.name} namechanged={this.newName} /></h1>

        <p>What a world!</p>
        <div className='unsplash'>
          <Card className='small black'
            header={<CardTitle image="https://source.unsplash.com/random/400x200">Unsplash random</CardTitle>}>
            Unsplash random image is cool
      </Card>
        </div>
        <br />
        <div>
          <Link to="/page-2/" className='btn'>page-2</Link>
        </div>
      </div>

    )
  }
}

export default IndexPage;
