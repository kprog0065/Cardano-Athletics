import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/hooks';
import { verifyJwt } from '../../redux/features/auth/authSlice';
import Outlet from '../Outlet/Outlet';

const PrivateRoute = ({ page, isNavbar }: { page: JSX.Element,isNavbar: Boolean }) => {
  const { isSuccess, isAuthenticated, jwt } = useAppSelector(
    (state) => state.auth
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!jwt || !jwt?.token) return;
    dispatch(verifyJwt(jwt.token));
  }, [jwt, isSuccess]);

  return isAuthenticated ? <Outlet page={page} isNavbar={isNavbar} /> : <Navigate replace to='/signin' />;
};

export default PrivateRoute;
