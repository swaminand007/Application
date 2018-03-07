import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Add from "./Add.jsx"
class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     data: []
  //   };
    //this.handleClick = this.handleClick.bind(this);
  //}
  // handleClick() {
  // alert(document.getElementById("txt").value);
    
  // var item = document.getElementById("txt").value ;
  //   //var array = this.state.data.slice();
  // this.state.data.push(item);
  // this.setState({ data: this.state.data });
  // }
  render() {
    return (
      <div>
      <Add/>
        
      </div>
    )
  }
}

render(<App />, document.getElementById("root"));
