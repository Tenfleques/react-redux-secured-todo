import React from "react";
import errorController from "./errorController";

class ErrorBoundarySilent extends React.Component {
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
        return "";
      }  
      return this.props.children; 
    }
  }

  export default ErrorBoundarySilent;