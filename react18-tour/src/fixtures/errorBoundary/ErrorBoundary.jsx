import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 以至于下一次渲染能够显示降级 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 在这里可以记录错误信息
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 在错误发生时渲染备用 UI
      return <h1>Something went wrong.</h1>;
    }

    // 正常渲染子组件
    return this.props.children;
  }
}

export default ErrorBoundary;
