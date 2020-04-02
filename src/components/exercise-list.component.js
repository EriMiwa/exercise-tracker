import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteExercise } from '../services/exerciseService';
import { getExercises } from '../services/exerciseService'

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0.10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> | <a href="#" onClick={() => {props.handleDelete(props.exercise._id)}}>delete</a>
    </td>
  </tr>
)


export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    
    this.state = {
      exercises: []
    };
  }

  componentDidMount() {
    getExercises()
      .then(response => this.setState({ exercises: response.data}))
      .catch(error => console.log(error))
  }

  handleDelete(id) {
    deleteExercise(id)
      .then(res => console.log(res.data))
      .catch(error => console.log(error))
    this.setState({
      exercises: this.state.exercises.filter(el => el.id !== id)
    })

  }

  exerciseList() {
    return this.state.exercises.map( currentExercise => {
      return <Exercise exercise={currentExercise} handleDelete={this.handleDelete} key={currentExercise._id}/>
    })
  }


  render() {
    return(
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    );
  }
}