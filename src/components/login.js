import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "./services/auth"
import styled from "styled-components"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
      <StyledLogin>
        <h2>Login</h2>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/app/profile`)
          }}
        >
          <label>
            <p>Username</p>
            <input type="text" name="username" onChange={this.handleUpdate} />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </StyledLogin>
    )
  }
}

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  flex: wrap;
  justify-content: center;
  align-items: center;
  margin-top: -5rem;
  h2 {
    margin-bottom: 2rem;
    font-size: 3rem;
    font-style: italic;
  }
  label {
    display: block;
    p {
      margin-bottom: 0;
    }
  }
  input[type="password"],
  input[type="submit"],
  input[type="text"] {
    padding: 0.5rem 1.5rem;
  }
  input[type="password"],
  input[type="text"] {
    border-radius: 5px;
    border: 1px solid lightgray;
  }
  input[type="submit"] {
    width: 100%;
    display: block;
    margin-top: 2rem;
    border-radius: 5px;
    border: none;
    background: var(--mainColor);
    color: white;
  }
`

export default Login
