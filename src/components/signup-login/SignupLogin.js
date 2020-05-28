import React, { Component } from "react";
import PhoneForm from "./PhoneForm";
import VerificationCode from "./VerificationCode";
import SignUpInfo from "./SignUpInfo";

class SignupLogin extends Component {
  state = {
    step: 1,
    nuevo: null,
    phonecode: "+57",
    phone: "",
    code: "",
    name: "",
    category: "",
    address: "",
    avgTime: "",
  };

  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  nextStepSpecial = (nuevo) => {
    const { step } = this.state;
    this.setState({ step: step + 1, nuevo: nuevo });
  };

  // Go back to prev step
  previousStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // Handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      phonecode,
      phone,
      code,
      nuevo,
      name,
      category,
      address,
      avgTime,
    } = this.state;
    const values = {
      phonecode,
      phone,
      code,
      nuevo,
      name,
      category,
      address,
      avgTime,
    };

    switch (step) {
      case 1:
        return (
          <PhoneForm
            nextStepSpecial={this.nextStepSpecial}
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
      case 3:
        return (
          <SignUpInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      default:
        return (
          <PhoneForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}

export default SignupLogin;
