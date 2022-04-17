import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export const Login = () => {
  const [formValues, handleInputChange, reset] = useForm({ username: '', password: '' });
  const [error, setError] = useState(false);
  const { username, password } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formValues).some(value => value === '')) {
      return setError(true);
    }
    console.log(formValues);
    reset();
    return setError(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <p>Todos los campos son obligatorios</p>}
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={username} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="pss">Password</label>
          <input type="password" id="pss" name="password" value={password} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};
