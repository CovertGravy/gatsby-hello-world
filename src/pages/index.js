import React from "react";
import Link from "gatsby-link";

import Box from "../components/box";
import styles from "../style/index.module.css";
import "../../node_modules/materialize-css/dist/css/materialize.css";
import "../../node_modules/materialize-css/dist/js/materialize.js";
import {Button, Card, CardTitle} from "react-materialize";


export default () => 
  <div style={{color : 'white', background: 'teal', margin: '3rem auto', maxWidth: 600, border: '5px solid aliceblue', boxShadow:'0px 0px 4px 2px teal', padding: 10}}>
    <h1>Hello Jaunty!</h1>
    {/* <Button waves='light'>button</Button> */}
    <p>What a world!</p>
    <div>
      <p>Unsplash random image is cool :)</p>
      {/* <Box>
        <img className={styles.image} src="https://source.unsplash.com/random/400x200" alt="random" />               
      </Box> */}
      <Card className = 'small black'
        header={<CardTitle image="https://source.unsplash.com/random/400x200">Unsplash random</CardTitle>}>
        Unsplash random image is cool
      </Card>
    </div>
    <br/>
    <div>  
        <Link to="/page-2/" className='btn'>page-2</Link>
    </div>
  </div>
