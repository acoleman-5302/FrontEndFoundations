import React from 'react';
import Topic from './Topic';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

export default Topics;
