import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccessAC, loginFailureAC, clearMessageAC } from '../../store/authReducer';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();
  const { message } = useSelector(state => state);

  useEffect(() => {
    // Сбрасываем сообщение при изменении состояния
    if (message) {
      const timer = setTimeout(() => {
        dispatch(clearMessageAC());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Пример проверки логина
    if (username === 'test' && password === 'password') {
      dispatch(loginSuccessAC());
    } else {
      dispatch(loginFailureAC());
    }

    // Сброс значений
    setUsername('');
    setPassword('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', marginTop: '50px' }}>
      <h2>Логин</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Имя пользователя:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Войти</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginForm;
