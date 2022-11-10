import React from "react";
import SignupRequest from "../../model/signup-request.js";
// @ts-ignore
import SignupForm from "./signup-form.js";
import {signup} from "../../services/registration-service";

const axios = require("axios");
const FormValidators = require("./validate");
const validateSignUpForm = FormValidators.validateSignUpForm;
const zxcvbn = require("zxcvbn");

type SignUpState = {
  errors: {};
  btnTxt: "show";
  user: SignupRequest;
  type: "password";
  score: "0";
};

class SignupContainer extends React.Component<{}, SignUpState> {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: new SignupRequest("", "", "", "", ""),
      btnTxt: "show",
      type: "password",
      score: "0",
    };

    this.pwMask = this.pwMask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.pwHandleChange = this.pwHandleChange.bind(this);
  }
  handleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });
  }

  pwHandleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });

    if (event.target.value === "") {
      this.setState((state) =>
        Object.assign({}, state, {
          score: "null",
        })
      );
    } else {
      var pw = zxcvbn(event.target.value);
      this.setState((state) =>
        Object.assign({}, state, {
          score: pw.score + 1,
        })
      );
    }
  }

  submitSignup(user) {
    var params = { username: user.usr, password: user.pw, email: user.email };
    signup(params)
      .then((res) => {
        if (res.success === true) {
          localStorage.token = res.token;
          localStorage.isAuthenticated = true;
          window.location.replace("/")
        } else {
          console.log(res)
          this.setState({
            errors: {message: res.msg},
          });
        }
      })
      .catch((err) => {
        console.log("Sign up data submit error: ", err);
      });
  }

  validateForm(event) {
    event.preventDefault();
    var payload = validateSignUpForm(this.state.user);
    if (payload.success) {
      this.setState({
        errors: {},
      });
      var user = {
        usr: this.state.user.username,
        pw: this.state.user.password,
        email: this.state.user.email,
      };
      this.submitSignup(user);
    } else {
      const errors = payload.errors;
      this.setState({
        errors,
      });
    }
  }

  pwMask(event) {
    event.preventDefault();
    this.setState((state) =>
      Object.assign({}, state, {
        type: this.state.type === "password" ? "input" : "password",
        btnTxt: this.state.btnTxt === "show" ? "hide" : "show",
      })
    );
  }

  render() {
    return (
      <div>
        <SignupForm
          onSubmit={this.validateForm}
          onChange={this.handleChange}
          onPwChange={this.pwHandleChange}
          errors={this.state.errors}
          user={this.state.user}
          score={this.state.score}
          btnTxt={this.state.btnTxt}
          type={this.state.type}
          pwMask={this.pwMask}
        />
      </div>
    );
  }
}

export default SignupContainer;
