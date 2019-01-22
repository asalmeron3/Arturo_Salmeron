import React from 'react';
import {
  Menu, 
  Image,
  Grid,
  Icon,
  Segment,
  Label,
  Modal,
  Embed
} from 'semantic-ui-react';

class Navbar extends React.Component {
  state = {
    activeItem: "",
    menuIconNames : [
      {name:"id badge outline", link:"/", target:"#"},
      {name:"linkedin", link:"https://www.linkedin.com/in/arturo-salmeron-7a538b53/", target:"_blank"},
      {name:"github sqaure", link:"https://www.github.com/asalmeron3", target:"_blank"},
      {name:"list alternate", link:"/", target:"#"},
      {name:"mail", link:"/", target:"#"}  
    ],
    menuName: ["About Me", "LinkedIn", "GitHub", "Resume", "Email"],
    isModalOpen: false
  }
  itemClicked = (e, {name}) => {
    switch (name){
      case "id badge outline" :
        this.setState({isModalOpen: !this.state.isModalOpen})
        break;
      case "list alternate":
        this.setState({isModalOpen: !this.state.isModalOpen, activeItem: name})
        break;
      default: console.log("Hey")
    }
  }
  closeModal = () => this.setState({isModalOpen: false, activeItem: ""})
  render(){
    return(
      <div>
        <Segment style={{background:"rgb(27,28,29)", "text-align":"center"}}>
          <Image src={"Headshot_Squared.png"} size='medium' circular style={{"margin":"auto"}}/>
          <Label color="black"  size="huge" style={{"display":"inline-block"}}>
            Arturo Salmeron
          </Label>
        </Segment>
        
        <Grid>
          <Grid.Row only='computer'>
            <Menu inverted vertical borderless size='large' style={{width:"100%"}}>
              {this.state.menuIconNames.map((each, i) => 
                <a href={each.link} target={each.target}>
                  <Menu.Item key={i} name={each.name} onClick={this.itemClicked} link>
                    <Icon name={each.name} size="large"/>
                    {this.state.menuName[i]}
                  </Menu.Item>
                </a>
              )}
            </Menu>
          </Grid.Row>
          <Grid.Row only='mobile tablet'>
            <Menu inverted borderless icon="labeled">
              {this.state.menuIconNames.map((each, i) =>
                <a href={each.link} target={each.target}>
                  <Menu.Item key={i} name={each.name} onClick={this.itemClicked} link>
                    <Icon name={each.name} size="large"/>
                    {this.state.menuName[i]}
                  </Menu.Item>
                </a>
              )}
            </Menu>
          </Grid.Row>
        </Grid>
          <Modal size="small" open={this.state.isModalOpen} onClose={this.closeModal}>
            <Modal.Header>Arturo Salmeron</Modal.Header>
            <Modal.Content>
              {this.state.activeItem === "list alternate" 
                ? <Image wrapped size="medium" src={"Resume.png"}/>
                : <div>
                  <p>I am a full stack web developer trained through Georgia Tech's web development bootcamp. After completing the 
                    bootcamp, I continued to learn more skills independently. I later became a teaching assistant for the coding 
                    program where I helped other students learn how to code and work through problems. In addition to tutoring, I 
                    also helped found a start-up called TrashTalks. During my time with the start-up, I learned the foundations for 
                    starting a business and helped TrashTalks build their website and build out a few web app ideas. 
                  </p>
                  <p>
                    During my time as both a teaching assistant for the bootcamp and a developer for TrashTalks, I have learned how
                    to communicate and ask questions when concerning overall goals and designs for a web app. This helps both me and 
                    the developer I'm assisiting break down how to approach the problem. Additionally, being in a teaching assistant
                    role has taught me to feel comfortable saying "I don't know but let's ask Google". And oftentimes, both the student
                    and myself learn something knew and learn that it's ok to not know everything.
                  </p>
                </div>
              }
            </Modal.Content>
          </Modal>
      </div>
    )
  }
}
export default Navbar;