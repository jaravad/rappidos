// import FoodBack from './FoodBack';

import React, { Component } from 'react';
import LogInForm from './LogInForm';
import VerificationCode from './VerificationCode';

class LogIn extends Component {
  state = {
    step: 1,
    phonecode: '+57',
    phone: '',
    code: '',
  };

  // Proceed to the next step

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // Go back to prev step
  previousStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // Handle field change
  handleChange = (input) => (e) => {
    // this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { phonecode, phone, code } = this.state;
    const values = { phonecode, phone, code };

    switch (step) {
      case 1:
        return (
          <LogInForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <VerificationCode
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      default:
        return (
          <LogInForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}

export default LogIn;
