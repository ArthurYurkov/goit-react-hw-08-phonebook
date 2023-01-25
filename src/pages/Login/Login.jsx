import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

import s from './styles.module.css';

export default function Login() {
  const [user, setUser] = useState();

  return (
    <div className={s.container}>
      <Box
        component="form"
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
            autoComplete="current-password"
          />

          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
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
