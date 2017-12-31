import React,{Component} from "react";
import Waypoint from 'react-waypoint';

class ScrollContainer extends Component{
    constructor(props){
        super(props);
        this.state = {scrollIn: false};
        this.scrollToggle = this.scrollToggle.bind(this);
    }
    scrollToggle(){
        this.setState({scrollIn: !this.state.scrollIn});
    }
    render(){
        return (
            <Waypoint onEnter={this.scrollToggle} onLeave={this.scrollToggle}>
            <div className={this.state.scrollIn?"scollContainer scrollIn":"scollContainer"}>
                <div className="container">
                   {this.props.comp}
                </div>
            </div>
            </Waypoint>
        );
    }
}

module.exports = ScrollContainer;