import React from 'react';
import Navbar from '../presentational/Navbar';
import ProjectSection from '../presentational/ProjectSection';
import {Grid} from 'semantic-ui-react';

class Home extends React.Component {
  state = {

  }
  render() {
    return(
      <Grid centered relaxed>
        <Grid.Row style={{padding:"0"}}>  
          <Grid.Column only='computer' color='black' width={4} style={{height:"100vh"}}>
            <Navbar/>
          </Grid.Column>
          <Grid.Column only='computer' width={12} style={{background:"white", height:"100vh", "overflow-y":"auto", "overflow-x":"hidden"}}>
            <ProjectSection/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row only='mobile tablet' color='black'>
          <Navbar/>
        </Grid.Row>
        <Grid.Row only='mobile tablet'>
          <ProjectSection/>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Home;