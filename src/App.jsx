import React, { Component } from 'react'
import { connect } from 'react-redux'
import TasksPage from './components/TasksPage'
import { createTask } from './actions'

class App extends Component {
  onCreateTask = ({ title, description }) => {
    this.props.dispatch(createTask({ title, description }))
  }

  render() {
    // console.log('Props from app', this.props)
    return (
      <div className="main-content">
        <TasksPage tasks={this.props.tasks} onCreateTask={this.onCreateTask} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
})

//The return value of mapStateToProps is passed into the App component as props, which is why render can reference this.props.tasks.
export default connect(mapStateToProps)(App)
