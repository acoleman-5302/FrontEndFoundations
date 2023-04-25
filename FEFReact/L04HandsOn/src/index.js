import React from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  return <NumberOfStudents />;
};

class NumberOfStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enrolledStudents: 0,
      addToEnrolled: 0,
      waitlistedStudents: 0,
      addToWaitlisted: 0
    };
  }

  addToEnrolled() {
    this.setState({
      enrolledStudents: this.state.enrolledStudents + 1
    });
  }

  addToWaitlisted() {
    this.setState({
      waitlistedStudents: this.state.waitlistedStudents + 1
    });
  }

  addMulToEnrolled() {
    this.setState({
      enrolledStudents:
        this.state.enrolledStudents + parseInt(this.state.addToEnrolled)
    });
  }

  addMulToWaitlisted() {
    this.setState({
      waitlistedStudents:
        this.state.waitlistedStudents + parseInt(this.state.addToWaitlisted)
    });
  }

  render() {
    return (
      <div>
        <h1>Enrolled Students: {this.state.enrolledStudents} </h1>
        <button onClick={this.addToEnrolled.bind(this)}>
          Add 1 Enrolled Student
        </button>

        <h5>Add Multiple Enrolled Students:</h5>
        <input
          type="number"
          onChange={(event) =>
            this.setState({
              addToEnrolled: event.target.value
            })
          }
          value={this.state.addToEnrolled}
        />
        <button onClick={this.addMulToEnrolled.bind(this)}>
          Increase Students
        </button>

        <h1>Waitlisted Students: {this.state.waitlistedStudents} </h1>
        <button onClick={this.addToWaitlisted.bind(this)}>
          Add 1 Waitlisted Student
        </button>

        <h5>Add Multiple Waitlisted Students:</h5>
        <input
          type="number"
          onChange={(event) =>
            this.setState({
              addToWaitlisted: event.target.value
            })
          }
          value={this.state.addToWaitlisted}
        />
        <button onClick={this.addMulToWaitlisted.bind(this)}>
          Increase Students
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
