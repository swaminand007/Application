import React,{Component} from 'react';
export default class Add extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    //this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert(document.getElementById("txt").value);

    var item = document.getElementById("txt").value;
    //var array = this.state.data.slice();
    this.state.data.push(item);
    this.setState({ data: this.state.data });
  }
  render() {

    return (
      <div>
        <input type="text" id="txt" />
        <button onClick={this.handleClick.bind(this)}>Add</button>
        <ul>

          {this.state.data.map(listitem => <li key={listitem.id}>{listitem}</li>)}


        </ul>

      </div>
    );
  }
}

