import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/Auth/authSelectors';
import { getSignUpThunk } from 'redux/Auth/authThunk';

import s from './styles.module.css';

export default function Registration() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const nameChange = e => setUserName(e.target.value.trim());
  const emailChange = e => setUserEmail(e.target.value.trim());
  const passwordChange = e => setUserPassword(e.target.value.trim());

  const handleSubmit = e => {
    e.preventDefault();
    if (userName !== '') {
      const newUser = {
        name: userName,
        email: userEmail,
        password: userPassword,
      };
      dispatch(getSignUpThunk(newUser));
    }

    if (!token) {
      return alert('Something went wrong');
    }
    reset();
  };

  const reset = () => {
    setUserName('');
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
            label="Name"
            type="text"
            onChange={nameChange}
            value={userName}
            autoComplete="current-password"
          />
          <TextField
            required
            id="outlined-email-input"
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
            <button className={s.regBtn}>Registration</button>
          </div>
        </div>
      </Box>
    </div>
  );
}
