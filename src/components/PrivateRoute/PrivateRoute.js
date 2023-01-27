import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoading, selectUser } from 'redux/Auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const shouldRedirect = !user && !isLoading;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
