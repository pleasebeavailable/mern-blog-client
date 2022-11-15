import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import "./style.css";

const LoginForm = ({
  onSubmit,
  onChange,
  goToSignUp,
  errors,
  user,
}) => {
  return (
      <div className="loginBox">
        <h1>Log In</h1>
        {errors.global !== '' && <p style={{color: "red"}}>{errors.global}</p>}

        <form onSubmit={onSubmit}>
          <TextField
              name="email"
              floatingLabelText="email"
              value={user.email}
              onChange={onChange}
              errorText={errors.email}
          />
          <TextField
              type="password"
              name="password"
              floatingLabelText="password"
              value={user.password}
              onChange={onChange}
              errorText={errors.password}
          />

          <br/>
          <RaisedButton
              className="logInSubmit"
              primary={true}
              type="submit"
              label="submit"
          />
        </form>
        <p>
          Don't have an account? <br/>
          <div onClick={goToSignUp}>Create account here</div>
        </p>
      </div>
  );
};

export default LoginForm;
