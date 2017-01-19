import React, { Component } from 'react';

class Delayed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    }
  }

  componentWillMount() {
    fetch('http://www.fakeresponse.com/api/?sleep=' + this.props.wait)
      .then(resp => {
        this.setState({ hidden: false })
      });
  }

  render() {

    if (this.state.hidden) {
      return (
        <div className="alert alert-warning" role="alert">
          <strong>Waiting for timeout {this.props.wait}sec...</strong>
        </div>
      );
    }

    return (
      <div className="alert alert-success" role="alert">
        <strong>Rendered after delay: {this.props.wait}sec</strong>
      </div>
    );
  }
}

export default Delayed;
