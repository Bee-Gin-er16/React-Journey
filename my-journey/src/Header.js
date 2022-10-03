import React from 'react';
import { ReactDOM } from 'react';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    // static getDerivedStateFromProps(props, state) {
    //   return {favoritecolor: props.favcol };
    // }
    componentDidMount() {
        setTimeout(() => {
          this.setState({favoritecolor: "yellow"})
        }, 1000)
    }
    shouldComponentUpdate() { return true; }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Before update: "+prevState.favoritecolor);
    }
    componentDidUpdate() {
        console.log("After update: "+this.state.favoritecolor);
    }
    changeColor = () => {
        this.setState({favoritecolor: "blue"});
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
}
  
export default Header;