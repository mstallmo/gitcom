import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
  return (
    <div>
      <p>{'React here!'}</p>
      <h1>{'TESTING HMR'}</h1>
    </div>
  );
};

export default App;

ReactDom.render(
  <App />,
  document.getElementById('app') || document.createElement('div')
);
