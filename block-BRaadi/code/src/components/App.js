import React from 'react';
import Header from './Header';
import Main from './Main';
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  render() {
    const { isDarkMode } = this.state;

    return (
      <ErrorBoundary>
        <Header isDarkMode={isDarkMode} />
        <Main isDarkMode={isDarkMode} />
      </ErrorBoundary>
    );
  }
}

export default App;
