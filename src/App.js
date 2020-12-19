import React, { Component } from "react"
import { connect } from "react-redux"
import { addItem } from "./actions/items"
import "./App.css"

class App extends Component {
  handleOnClick() {
    this.props.addItem()
  }

  render() {
    debugger
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>Click</button>
        <p>{this.props.items.length}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  }
}

// const mdp = (dispatch) => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     },
//   }
// }

// export default connect(mapStateToProps, mdp)(App)

export default connect(mapStateToProps, { addItem })(App)
