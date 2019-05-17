import React, { Component } from 'react'
import { connect } from 'react-redux'
import TasksPage from './TasksPage'

class App extends Component {
  render() {
    return (
      <div className="main-content">
        <TasksPage tasks={this.props.tasks} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
})

//The return value of mapStateToProps is passed into the App component as props, which is why render can reference this.props.tasks.
export default connect(mapStateToProps)(App)
