import React from 'react';
import ReactDOM from 'react-dom';


class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      password: 'React',
      authorized: false
    }
    this.authorize = this.authorize.bind(this);
  }


  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password === this.state.password;
    this.setState({
      authorized: auth
    });
  }


  render () {
    const login = (
      <form action = "#" onSubmit = {this.authorize}>
        <input type="password" placeholder = "Password" />
        <input type="submit" />
      </form>
    );

    const contactInfo = (
      <div>
        <p>contactme@gmail.com</p>
        <p>09078934012</p>
      </div>
    );

    return (
      <div id="authorization">
        <h1>
          {this.state.authorized ? 'Contact' : 'Enter Your Password'}
        </h1>
        {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}



ReactDOM.render(
  <Contact />,
  document.getElementById('root')
);