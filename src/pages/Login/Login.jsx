import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLogInThunk } from 'redux/Auth/authThunk';

import s from './styles.module.css';

export default function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const dispatch = useDispatch();

  const emailChange = e => setUserEmail(e.target.value.trim());
  const passwordChange = e => setUserPassword(e.target.value.trim());

  const handleSubmit = e => {
    e.preventDefault();
    if (userEmail !== '') {
      const newUser = {
        email: userEmail,
        password: userPassword,
      };
      dispatch(getLogInThunk(newUser));
    }

    reset();
  };

  const reset = () => {
    setUserEmail('');
    setUserPassword('');
  };

  return (
    <div className={s.container}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '35ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className={s.inputStyle}>
          <TextField
            required
            id="outlined-name-input"
            label="Email"
            type="text"
            onChange={emailChange}
            value={userEmail}
            autoComplete="current-password"
          />

          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            onChange={passwordChange}
            value={userPassword}
            autoComplete="current-password"
          />
          <div className={s.btnCont}>
            <button className={s.regBtn}>Login</button>
          </div>
        </div>
      </Box>
    </div>
  );
}
