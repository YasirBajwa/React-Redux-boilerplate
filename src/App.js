import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import store from "./store/store";
import TodoAction from "./store/Actions/actionTodo";

function UpdateTodo() {
  return {
    type: TodoAction.GET_TODO
  };
}
class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getTodo();
  }
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
  }
  render() {
    return <div className="App">Hello World</div>;
  }
}
function mapSateToProps(state) {
  return {
    Todo: state.Todo.text
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getTodo: data => dispatch(UpdateTodo(data))
  };
}

export default connect(
  mapSateToProps,
  mapDispatchToProps
)(App);

//export default App;

/*



===========> Similar Working ====================


import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import store from "./store/store";

function UpdateTodo() {
  return {
    type: "ADD-TODO"
  };
}
class App extends Component {
  componentDidMount() {
    console.log(this.props);
    // this.props.updateTodo();
  }
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
  }
  render() {
    return <div className="App">Hello World</div>;
  }
}
// function mapSateToProps(state) {
//   return {
//     Todo: state.Todo.text
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     updateTodo: data => dispatch(UpdateTodo(data))
//   };
// }

// export default connect(
//   mapSateToProps,
//   mapDispatchToProps
// )(App);
export default App;
*/
