import React from "react";
import LoginRequest from "../../model/login-request";
import LoginForm from "./login-form";
import {loginAction} from "../../redux/actions/user";
import {connect} from "react-redux";

const axios = require("axios");
const FormValidators = require("./validate");
const validateLoginForm = FormValidators.validateLoginForm;
const zxcvbn = require("zxcvbn");

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      user: new LoginRequest("", ""),
      btnTxt: "show",
      type: "password",
    };

    this.handleChange = this.handleChange.bind(this);
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

  submitLogin(user) {
    this.props.loginUser(user)
  }

  validateForm(event) {
    event.preventDefault();
    var payload = validateLoginForm(this.state.user);
    if (payload.success) {
      this.setState({
        errors: {},
      });
      var user = {
        email: this.state.user.username,
        password: this.state.user.password,
      };
      this.submitLogin(user);
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
          <LoginForm
              onSubmit={this.validateForm}
              onChange={this.handleChange}
              onPwChange={this.pwHandleChange}
              errors={this.state.errors}
              user={this.state.user}
              type={this.state.type}
              pwMask={this.pwMask}
          />
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: (data) => dispatch(loginAction(data))
});

export default connect(null, mapDispatchToProps)(LoginContainer);
