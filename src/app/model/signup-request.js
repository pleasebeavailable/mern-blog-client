class SignupRequest {
  constructor(title, username, email, mobile, gender, address, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

export default SignupRequest;
