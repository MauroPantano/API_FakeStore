import React, { useState, useEffect } from 'react';
import profileLog from '../img/profile-log.png';

const ProfileForm = () => {
  const [userAccount, setUserAccount] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('registerData');
    if (data) {
      setUserAccount(JSON.parse(data));
    }
  }, []);

  function registerUser(e) {
    e.preventDefault();
    const newUser = {
      id: userAccount.length + 1,
      username: e.target.elements.username.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    setUserAccount([...userAccount, newUser]);
    localStorage.setItem('registerData', JSON.stringify([...userAccount, newUser]));
  }

  function loginUser(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    const user = userAccount.find((u) => u.email === email && u.password === password);
    if (user) {
      setLoggedInUser(user);
      setIsLogged(true);
    } else {
      alert('Invalid email or password');
    }
  }

  function logoutUser() {
    setLoggedInUser(null);
    setIsLogged(false);
  }

  return (
    <div>
      {isLogged ? (
        <div className="log-profile">
          <img src={profileLog} width={150} height={150} style={{paddingBottom: 40, paddingTop: 20, borderRadius: 50}}></img><br></br>
          <label><b>USERNAME:</b> <p>{JSON.stringify(loggedInUser.username)}</p></label><br></br>
          <label><b>EMAIL:</b> <p>{JSON.stringify(loggedInUser.email)}</p></label><br></br>
          <label><b>PASSWORD:</b> <p>{JSON.stringify(loggedInUser.password)}</p></label><br></br>
          <button onClick={logoutUser} className='log-profile-logout'>Logout</button>
        </div>
      ) : (
        <div className="conteiner-profile">
          <h1>Profile</h1>
          <form onSubmit={loginUser}>
            <h2>Login</h2>
            <label>Email:</label>
            <input type="email" name="email" />
            <label>Password:</label>
            <input type="password" name="password" />
            <button type="submit">Login</button>
          </form>
          <form onSubmit={registerUser}>
            <h2>Register</h2>
            <label>Name:</label>
            <input type="text" name="username" />
            <label>Email:</label>
            <input type="email" name="email" />
            <label>Password:</label>
            <input type="password" name="password" />
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProfileForm;

