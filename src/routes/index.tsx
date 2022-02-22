import { Navigate, useRoutes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';

import type { RouteObject } from 'react-router-dom';

import { Routes } from './routes';

import AuthenticatedLayout from './layouts/authenticated';
import PublicLayout from './layouts/public';

import Root from './Root';
import Home from './Home';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import NotFound from './NotFound';
import ResetPassword from './ResetPassword';
import Signup from './Signup';
import ToS from './ToS';
import ValidateAccount from './ValidateAccount';

const Router = () => {
  const { t } = useTranslation();
  const routes: RouteObject[] = [
    {
      path: Routes.ROOT,
      element: (
        <PublicLayout
          helmet={{
            title: t('routes.root.helmet.TITLE'),
            meta: {
              name: t('routes.root.helmet.meta.NAME'),
              content: t('routes.root.helmet.meta.CONTENT'),
            },
          }}
        />
      ),
      children: [{ index: true, element: <Root /> }],
    },
    {
      path: Routes.LOGIN,
      element: (
        <PublicLayout
          helmet={{
            title: t('routes.login.helmet.TITLE'),
            meta: {
              name: t('routes.login.helmet.meta.NAME'),
              content: t('routes.login.helmet.meta.CONTENT'),
            },
          }}
        />
      ),
      children: [{ index: true, element: <Login /> }],
    },
    {
      path: Routes.FORGOT_PASSWORD,
      element: (
        <PublicLayout
          helmet={{
            title: t('routes.forgot_password.helmet.TITLE'),
            meta: {
              name: t('routes.forgot_password.helmet.meta.NAME'),
              content: t('routes.forgot_password.helmet.meta.CONTENT'),
            },
          }}
        />
      ),
      children: [{ index: true, element: <ForgotPassword /> }],
    },
    {
      path: Routes.RESET_PASSWORD,
      element: (
        <PublicLayout
          helmet={{
            title: t('routes.reset_password.helmet.TITLE'),
            meta: {
              name: t('routes.reset_password.helmet.meta.NAME'),
              content: t('routes.reset_password.helmet.meta.CONTENT'),
            },
          }}
        />
      ),
      children: [{ index: true, element: <ResetPassword /> }],
    },
    {
      path: Routes.SIGNUP,
      element: (
        <PublicLayout
          helmet={{
            title: t('routes.signup.helmet.TITLE'),
            meta: {
              name: t('routes.signup.helmet.meta.NAME'),
              content: t('routes.signup.helmet.meta.CONTENT'),
            },
          }}
        />
      ),
      children: [{ index: true, element: <Signup /> }],
    },
    {
      path: Routes.TOS,
      element: (
        <PublicLayout
          helmet={{
            title: t('routes.tos.helmet.TITLE'),
            meta: {
              name: t('routes.tos.helmet.meta.NAME'),
              content: t('routes.tos.helmet.meta.CONTENT'),
            },
          }}
        />
      ),
      children: [{ index: true, element: <ToS /> }],
    },
    {
      path: Routes.VALIDATE_ACCOUNT,
      element: <AuthenticatedLayout />,
      children: [{ index: true, element: <ValidateAccount /> }],
    },
    {
      path: Routes.HOME,
      element: <AuthenticatedLayout />,
      children: [{ index: true, element: <Home /> }],
    },
    {
      path: Routes.NOT_FOUND,
      element: <NotFound />,
    },
    { path: '*', element: <Navigate to={Routes.NOT_FOUND} /> },
  ];
  const router = useRoutes(routes);
  return (
    <>
      <ToastContainer />
      {router}
    </>
  );
};

export default Router;
