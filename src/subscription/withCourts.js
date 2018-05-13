import React from 'react';
import Api from '../services/api';

export const withCourts = Component => {
  return class WithCourts extends React.Component {
	state = {};

    componentDidMount() {
	  this.request = Api.getCourts()
	  	.then(data => this.setState({data}));
    }
    render() {
      const newProps = { ...this.props, data: this.state.data };
      return <Component {...newProps} />;
    }
  };
};
