import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDrivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log("error in component", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h2>oops terjadi kesalahan coba lagi</h2>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
