import React from "react";
import LoginForm from "./login-form";
import {handleChange, loginAction, userError} from "../../redux/actions/user";
import {navigate} from "../../redux/actions/navigate";
import {useDispatch, useSelector} from "react-redux";
import {SIGNUP_ROUTE} from "../../constants/routes";

const FormValidators = require("./validate");
const validateLoginForm = FormValidators.validateLoginForm;
const zxcvbn = require("zxcvbn");

export default function LoginContainer() {
  const dispatch = useDispatch();
  const errors = useSelector(state => state.user.errors);
  const stateUser = useSelector(state => state.user.user);

  const handleFormChange = (event) => {
    let user = {...stateUser}
    const field = event.target.name;
    user[field] = event.target.value;
    dispatch(handleChange(user));
  }
  const submitLogin = () => {
    dispatch(loginAction(stateUser));
  }

  const goToSignUp = () => {
    dispatch(navigate({route: SIGNUP_ROUTE}));
  }

  const validateForm = (event) => {
    event.preventDefault();
    let payload = validateLoginForm(stateUser);
    if (payload.success) {
      dispatch(userError(''));
      submitLogin();
    } else {
      const errors = payload.errors;
      dispatch(userError(errors));
    }
  }

    return (
        <div>
          <LoginForm
              onSubmit={validateForm}
              onChange={handleFormChange}
              goToSignUp={goToSignUp}
              errors={errors}
              user={stateUser}
          />
        </div>
    );
}


