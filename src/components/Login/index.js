import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  MainContainerLogin,
  ErrorMsg,
  MainContainerLoginDark,
  InputLogin,
  InputLoginDark,
  InputItemsLogin,
  LogoLogin,
  Card1Login,
  Card1LoginDark,
  PasswordCardLogin,
  CheckboxInputLogin,
  LoginButton,
} from './StyledComponents'

class Login extends Component {
  state = {
    userName: '',
    userPassword: '',
    showPassword: false,
    errorMsg: '',
  }

  passwordEntering = event => {
    this.setState({userPassword: event.target.value})
  }

  usernameEntering = event => {
    this.setState({userName: event.target.value})
  }

  clickedCheckbox = () => {
    const {showPassword} = this.state
    this.setState({showPassword: !showPassword})
  }

  clickedLogin = async event => {
    event.preventDefault()
    const {userPassword, userName} = this.state
    const url = 'https://apis.ccbp.in/login'
    const credentials = {username: userName, password: userPassword}
    const options = {method: 'POST', body: JSON.stringify(credentials)}
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      Cookies.set('jwt_token', data.jwt_token, {expires: 2})
      const {history} = this.props
      history.replace('/')
    } else {
      const data = await response.json()
      this.setState({errorMsg: `*${data.error_msg}`})
    }
  }

  render() {
    const {errorMsg, userPassword, userName, showPassword} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darktheme} = value
          return (
            <>
              {darktheme ? (
                <MainContainerLoginDark>
                  <form onSubmit={this.clickedLogin}>
                    <Card1LoginDark>
                      <LogoLogin
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                        alt="website logo"
                      />
                      <InputItemsLogin>
                        {' '}
                        <label htmlFor="userNameInput">USERNAME</label>
                        <InputLoginDark
                          placeholder="Username:  rahul"
                          type="input"
                          onChange={this.usernameEntering}
                          value={userName}
                          id="userNameInput"
                        />
                      </InputItemsLogin>
                      <InputItemsLogin>
                        {' '}
                        <label htmlFor="passwordInput">PASSWORD</label>
                        {showPassword ? (
                          <InputLoginDark
                            onChange={this.passwordEntering}
                            value={userPassword}
                            placeholder="Password:   rahul@2021"
                            type="text"
                            id="passwordInput"
                          />
                        ) : (
                          <InputLoginDark
                            onChange={this.passwordEntering}
                            value={userPassword}
                            placeholder="Password:   rahul@2021"
                            type="password"
                            id="passwordInput"
                          />
                        )}
                      </InputItemsLogin>
                      <PasswordCardLogin>
                        {' '}
                        <CheckboxInputLogin
                          onClick={this.clickedCheckbox}
                          type="checkbox"
                          id="PASSWORD"
                          value={showPassword}
                        />
                        <label htmlFor="PASSWORD">Show Password</label>
                      </PasswordCardLogin>{' '}
                      <LoginButton type="submit">Login</LoginButton>
                      <ErrorMsg>{errorMsg} </ErrorMsg>
                    </Card1LoginDark>
                  </form>
                </MainContainerLoginDark>
              ) : (
                <MainContainerLogin>
                  <form onSubmit={this.clickedLogin}>
                    <Card1Login>
                      <LogoLogin
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="website logo"
                      />
                      <InputItemsLogin>
                        {' '}
                        <label htmlFor="userNameInput">USERNAME</label>
                        <InputLogin
                          placeholder="Username:   rahul"
                          type="input"
                          onChange={this.usernameEntering}
                          value={userName}
                          id="userNameInput"
                        />
                      </InputItemsLogin>
                      <InputItemsLogin>
                        {' '}
                        <label htmlFor="passwordInput">PASSWORD</label>
                        {showPassword ? (
                          <InputLogin
                            onChange={this.passwordEntering}
                            value={userPassword}
                            placeholder="Password:   rahul@2021"
                            type="input"
                            id="passwordInput"
                          />
                        ) : (
                          <InputLogin
                            onChange={this.passwordEntering}
                            value={userPassword}
                            placeholder="Password:   rahul@2021"
                            type="password"
                            id="passwordInput"
                          />
                        )}
                      </InputItemsLogin>
                      <PasswordCardLogin onClick={this.clickedCheckbox}>
                        <CheckboxInputLogin
                          type="checkbox"
                          checked={showPassword}
                        />
                        <p>Show Password</p>
                      </PasswordCardLogin>{' '}
                      <LoginButton type="submit">Login</LoginButton>
                      <ErrorMsg>{errorMsg} </ErrorMsg>
                    </Card1Login>
                  </form>
                </MainContainerLogin>
              )}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Login
