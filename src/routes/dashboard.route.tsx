import React from 'react';
import { Route } from '@mui/icons-material';
import { Redirect, Switch, useLocation } from 'react-router-dom';
import { AuthStatusEnum, UtilsReducerInterface } from '../provider/reducer/utils.reducer';
import { config, useTransition, animated } from 'react-spring';
import { useSelector } from 'react-redux';
import { MainReducerInterface } from '../provider/reducer/main.reducer';
import { LoginViewRoute } from '../views/login/login.view';
import { DashboardViewRoute } from '../views/dashboard/dashboard.view';
import { Box } from '@mui/material';

const LayoutView = React.lazy(() => import('../views/layout/layout.view'));

const DashboardView = React.lazy(() => import('../views/dashboard/dashboard.view'));

const ChangePasswordView = React.lazy(() => import('../views/changePassword/changePassword.view'));

export const DashboardRouteRoute = () => `/app`;

const DashboardRoute = () => {
  const utils = useSelector<MainReducerInterface, UtilsReducerInterface>((state) => state.utils);

  const location = useLocation();

  const transition = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
  });

  return utils.authStatus !== AuthStatusEnum.Forbidden ? (
    // TODO : add
    <Box
      style={{
        width: '200px',
        display: 'flex',
        height: '100%',
      }}
    >
      {transition((style, location) => (
        <animated.div style={{ ...style }} className="screen">
          {utils.passwordIsExpired ? (
            <Switch location={location}>
              <Route>
                <ChangePasswordView />
              </Route>
            </Switch>
          ) : (
            <Switch location={location}>
              <Route path={DashboardViewRoute()}>
                <DashboardView />
              </Route>
            </Switch>
          )}
        </animated.div>
      ))}
    </Box>
  ) : (
    <Redirect to={LoginViewRoute()} />
  );
};

export default DashboardRoute;
