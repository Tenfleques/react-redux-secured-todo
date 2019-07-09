import React from "react";
import errorController from "./errorController";

class ErrorBoundaryNoisy extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
        errorController(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        return this.props.fallback ? 
          this.props.fallback : <h1>Something went wrong.</h1>;
      }  
      return this.props.children; 
    }
  }

  export default ErrorBoundaryNoisy;