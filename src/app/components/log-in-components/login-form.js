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
  type,
  onPwChange,
}) => {
  return (
      <div className="loginBox">
        <h1>Log In</h1>
        {errors.message && <p style={{color: "red"}}>{errors.message}</p>}

        <form onSubmit={onSubmit}>
          <TextField
              name="username"
              floatingLabelText="username/email"
              value={user.username}
              onChange={onChange}
              errorText={errors.username}
          />
          <TextField
              type={type}
              name="password"
              floatingLabelText="password"
              value={user.password}
              onChange={onPwChange}
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
