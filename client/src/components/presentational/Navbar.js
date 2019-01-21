import React from 'react';
import {
  Menu, 
  Image,
  Grid,
  Icon,
  Segment,
  Label,
  Modal
} from 'semantic-ui-react';

class Navbar extends React.Component {
  state = {
    activeItem: "",
    menuIconNames : ["id badge outline", "linkedin", "github square", "list alternate", "mail"],
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
              {this.state.menuIconNames.map((name, i) => 
                <Menu.Item key={i} name={name} onClick={this.itemClicked} link><Icon name={name} size="large"/>{this.state.menuName[i]}</Menu.Item>
              )}
            </Menu>
          </Grid.Row>
          <Grid.Row only='mobile tablet'>
            <Menu inverted borderless icon="labeled">
              {this.state.menuIconNames.map((name, i) => 
                <Menu.Item key={i} name={name} onClick={this.itemClicked} link><Icon name={name}/>{this.state.menuName[i]}</Menu.Item>
              )}
            </Menu>
          </Grid.Row>
        </Grid>
          <Modal size="small" open={this.state.isModalOpen} onClose={this.closeModal}>
            <Modal.Header>Arturo Salmeron</Modal.Header>
            <Modal.Content>
              {this.state.activeItem == "list alternate" 
                ? <Image wrapped size="medium" src={"Headshot_squared.png"}/>
                : <div>
                    <h2>Arturo Salmeron</h2>
                    <p>This is the section for things about me.</p>
                    <p>More things here.</p>
                    <p>And more things here.</p>
                  </div>
              }
            </Modal.Content>
          </Modal>
      </div>
    )
  }
}
export default Navbar;