import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser } from 'redux/Auth/authSelectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const user = useSelector(selectUser);
  return user ? <Navigate to={redirectTo} /> : Component;
};
