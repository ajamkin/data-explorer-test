import React, { Component } from 'react';

class Delayed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({hidden: false});
    }, this.props.wait);
  }

  render() {

    if(this.state.hidden) {
      return (
        <div className="alert alert-warning" role="alert">
          <strong>Waiting for timeout...</strong>
        </div>
      );
    }

    return (
      <div className="alert alert-success" role="alert">
        <strong>Rendered after delay: {this.props.wait}</strong>
      </div>
    );
  }
}

export default Delayed;
