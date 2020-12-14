import React from "react";

class Lifecycles extends React.Component {
  constructor() {
    super();
    console.log("constructor!");
  }

  componentDidMount() {
    console.log("componentDidMount!");
  }

  componentDidUpdate() {
    console.log("component DidUpdate!");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount!");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldcomponentUpdate!", nextProps);
    return nextProps.text !== this.props.text;
  }

  render() {
    console.log("render!");
    return (
      <div className="lifecycles">
        <h3>
          LIFECYCLES COMPONENT
          {this.props.text}
        </h3>
      </div>
    );
  }
}

export default Lifecycles;
