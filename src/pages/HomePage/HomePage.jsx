import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUser } from 'redux/Auth/authSelectors';
import s from './styles.module.css';

export default function HomePage() {
  const user = useSelector(selectUser);
  return (
    <>
      <div className={s.container}>
        <h1 className={s.title}>Welcome to "Phonebook"</h1>
        <h2 className={s.titleH2}>
          We make your life easier, even if you don't need it
        </h2>
        {user ? (
          <NavLink className={s.btnHome} to="/contacts">
            Let's start a new future together
          </NavLink>
        ) : (
          <NavLink className={s.btnHome} to="/login">
            Let's start a new future together
          </NavLink>
        )}
      </div>
      <div className={s.divJobs}>
        <img
          className={s.imgResponsive}
          src="http://www.clker.com/cliparts/7/4/c/4/1446118397610284725jobs.png"
          alt=""
        />
      </div>
    </>
  );
}
