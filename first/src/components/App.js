import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
      <Link to="questions-list">Questions</Link> | <Link to="uploads">Uploads</Link>
      <h1>This is it</h1>
      {this.props.children}
      </div>
    );
  }
}
