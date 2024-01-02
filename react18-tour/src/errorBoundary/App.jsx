import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';

class ExampleComponent extends Component {
  render() {
    // 这里可能引发错误
    throw new Error('Example error');

    return (
      <div>
        {/* 渲染组件的内容 */}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <ExampleComponent />
      </ErrorBoundary>
    );
  }
}

export default App;
