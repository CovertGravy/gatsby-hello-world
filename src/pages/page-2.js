import React from 'react';
import Link from 'gatsby-link';
import styles from "../style/index.module.css";
import "../../node_modules/materialize-css/dist/css/materialize.css";

import Navbar from '../components/Navbar';

const Ashish =  () => (
  <div className="black" style={{height:400}}>
      <div className="container-fluid">
        <div className="col s12">
        <Navbar />
          <h3 className="white-text center"
          style={{marginTop:'60px', textShadow:'2px 2px grey'}}>
          Hi! I am <span className="white black-text">Ashish S</span>
          </h3>
        </div>
      </div>
  </div>
  
)

export default Ashish;

  
