import React, { Suspense, useEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import './css/route.css';
import { useDispatch, useSelector } from 'react-redux';
import { ActionInterface, ActionTypeEnum } from '../provider/action.interface';
import { MainReducerInterface } from '../provider/reducer/main.reducer';
import { AuthStatusEnum, UtilsReducerInterface } from '../provider/reducer/utils.reducer';
import { LoginViewRoute } from '../views/login/login.view';
import { DashboardViewRoute } from '../views/dashboard/dashboard.view';
import { IconViewRoute } from '../views/Icon/icon.view';
import { KitViewRoute } from '../views/Kit/kit.view';

const LoginView = React.lazy(() => import('../views/login/login.view'));
const IconView = React.lazy(() => import('../views/Icon/icon.view'));
const KitView = React.lazy(() => import('../views/Kit/kit.view'));
const DashboardView = React.lazy(() => import('../views/dashboard/dashboard.view'));

const AppRoute = () => {
  const utils = useSelector<MainReducerInterface, UtilsReducerInterface>((state) => state.utils);

  useEffect(() => {
    if (utils.authStatus === AuthStatusEnum.NotChecked) {
      // TODO : check auth service
    }
  }, [utils.authStatus]);

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<ActionInterface<string>>({
      type: ActionTypeEnum.SetRoute,
      payload: location.pathname,
    });
  }, [location, dispatch]);

  return (
    // TODO : Adding Loader here
    <Suspense fallback={<span>test</span>}>
      <div className="screen">
        <Switch>
          <Route path={DashboardViewRoute()}>
            <DashboardView />
          </Route>
          <Route path={KitViewRoute()}>
            <KitView />
          </Route>
          <Route path={IconViewRoute()}>
            <IconView />
          </Route>
          <Route path={LoginViewRoute()}>
            <LoginView />
          </Route>

          {/* <Route path="/">
            <Redirect to={DashboardViewRoute()} />
          </Route> */}
        </Switch>
      </div>
    </Suspense>
  );
};

export default AppRoute;
