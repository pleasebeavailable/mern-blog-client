import React from "react";
import SignupForm from "./signup-form.js";
import {handleChange, signUp, userError} from "../../redux/actions/user";
import {useDispatch, useSelector} from "react-redux";

const FormValidators = require("./validate");
const validateSignUpForm = FormValidators.validateSignUpForm;
const zxcvbn = require("zxcvbn");

export default function SignupContainer() {
  const [score, setScore] = React.useState("0");
  const [btnText, setBtnText] = React.useState("show");
  const [type, setType] = React.useState("password");
  const dispatch = useDispatch();
  const errors = useSelector(state => state.user.errors);
  const stateUser = useSelector(state => state.user.user);
  const handleFormChange = (event) => {
    let user = {...stateUser}
    const field = event.target.name;
    user[field] = event.target.value;
    dispatch(handleChange(user));
  }

  const pwHandleChange = (event) => {
    let user = {...stateUser}
    const field = event.target.name;
    user[field] = event.target.value;
    dispatch(handleChange(user));

    if (event.target.value === "") {
      setScore({score: null});
    } else {
      let pw = zxcvbn(event.target.value);
      let score = pw.score + 1;
      setScore(score);
    }
  }
  const submitSignup = () => {
    dispatch(signUp(stateUser))
  }

  const validateForm = (event) => {
    event.preventDefault();
    let payload = validateSignUpForm(stateUser);
    console.log(payload)
    if (payload.success) {
      dispatch(userError(''));
      submitSignup();
    } else {
      const errors = payload.errors;
      dispatch(userError(errors));
    }
  }

  const pwMask = (event) => {
    event.preventDefault();
    let type = "password" ? "input" : "password";
    let btnText = "show" ? "hide" : "show";
    setType(type);
    setBtnText(btnText);
  }
  return (<div>
        <SignupForm
            onSubmit={validateForm}
            onChange={handleFormChange}
            onPwChange={pwHandleChange}
            errors={errors}
            user={stateUser}
            score={score}
            btnTxt={btnText}
            type={type}
            pwMask={pwMask}
        />
        {/*<p>*/}
        {/*  Go to home screen? <br/>*/}
        {/*  <div onClick={goToSignUp}>Home</div>*/}
        {/*</p>*/}
      </div>
  );
}

