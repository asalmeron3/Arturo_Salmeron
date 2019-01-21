import React from 'react';
import {
  Grid, 
  Header,
  Icon,
  Container,
  Card
} from 'semantic-ui-react';

class ProjectSection extends React.Component {
  state = {
    activeItem: ""
  }
  menuItemClick = (e) => {
    console.log(e.target.name)
  }
  render(){
    return (
      <Container>
        <Header as='h2' icon textAlign='center' style={{"margin-top":"20px"}}>
          <Icon name='folder open' circular />
          <Header.Content>Projects</Header.Content>
        </Header>
        <Card.Group relaxed centered>
            <Card
              image={"Headshot_Squared.png"}
              header='Project 1'
              meta='React, Javascrip, Handlebars, Other, Other'
              description='Shuffles and does thinsgkjfkdsadsjjkddfjk akldfjdsfjkl aklddklkld akldkladkl lkakldaldk'
            />
            <Card
              image={"Headshot_Squared.png"}
              header='Project 1'
              meta='React, Javascrip, Handlebars, Other, Other'
              description='Shuffles and does thinsgkjfkdsadsjjkddfjk akldfjdsfjkl aklddklkld akldkladkl lkakldaldk'
            />
            <Card
              image={"Headshot_Squared.png"}
              header='Project 1'
              meta='React, Javascrip, Handlebars, Other, Other'
              description='Shuffles and does thinsgkjfkdsadsjjkddfjk akldfjdsfjkl aklddklkld akldkladkl lkakldaldk'
            />
            <Card
              image={"Headshot_Squared.png"}
              header='Project 1'
              meta='React, Javascrip, Handlebars, Other, Other'
              description='Shuffles and does thinsgkjfkdsadsjjkddfjk akldfjdsfjkl aklddklkld akldkladkl lkakldaldk'
            />
            <Card
              image={"Headshot_Squared.png"}
              header='Project 1'
              meta='React, Javascrip, Handlebars, Other, Other'
              description='Shuffles and does thinsgkjfkdsadsjjkddfjk akldfjdsfjkl aklddklkld akldkladkl lkakldaldk'
            />
            <Card
              image={"Headshot_Squared.png"}
              header='Project 1'
              meta='React, Javascrip, Handlebars, Other, Other'
              description='Shuffles and does thinsgkjfkdsadsjjkddfjk akldfjdsfjkl aklddklkld akldkladkl lkakldaldk'
            />
            <Card
              image={"Headshot_Squared.png"}
              header='Project 1'
              meta='React, Javascrip, Handlebars, Other, Other'
              description='Shuffles and does thinsgkjfkdsadsjjkddfjk akldfjdsfjkl aklddklkld akldkladkl lkakldaldk'
            />
            <Card
              image={"Headshot_Squared.png"}
              header='Project 1'
              meta='React, Javascrip, Handlebars, Other, Other'
              description='Shuffles and does thinsgkjfkdsadsjjkddfjk akldfjdsfjkl aklddklkld akldkladkl lkakldaldk'
            />
        </Card.Group>
      </Container>
    )
  }
}
export default ProjectSection;