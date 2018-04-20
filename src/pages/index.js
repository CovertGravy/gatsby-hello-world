import React from "react";
import Link from "gatsby-link";

import Box from "../components/box";

export default () => 
  <div style={{color : 'teal'}}>
    <h1>Hello Ashish!</h1>
    <p>What a world!</p>
    <div>
      <p>Unsplash random image is cool :)</p>
      <Box>
        <img src="https://source.unsplash.com/random/400x200" alt="random" />               
      </Box>
    </div>
    <br/>
    <div>
      <Link to="/page-2/">link</Link>
    </div>
  </div>
