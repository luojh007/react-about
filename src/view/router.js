import React from 'react';
import { renderRoutes } from 'react-router-config'
import Loadable from 'react-loadable';
import ScrollToTop from '../components/ScrollToTop'
import { Spin } from 'antd';
import MainLayout from '../components/MainLayout/MainLayout'

const Root = ({ route }, props) => {
  return <ScrollToTop>
    <MainLayout>
      {renderRoutes(route.routes, props)}
    </MainLayout>
  </ScrollToTop>
}
const Loading = ({ error, pastDelay }) => {
  if (error) {
    console.log(error);
    return <div>Error!</div>;
  } else if (pastDelay) {
    return (
      <Spin tip="Loading...">
        <div style={{ height: 500 }} />
      </Spin>
    );
  } else {
    return null;
  }
};
export default function RootRouter (props) {
  const routes = [
    {
      component: (routes) => Root(routes, props),
      routes: [{
        path: '/index.html',
        component: Loadable({
          loader: () => import('./routes/index'),
          loading: Loading,
        })
      },
      {
        path: '/hooks.html',
        component: Loadable({
          loader: () => import('./routes/hooks'),
          loading: Loading,
        })
      },
      {
        path: '/render-props.html',
        component: Loadable({
          loader: () => import('./routes/renderProps'),
          loading: Loading,
        })
      },
      {
        path: '/hoc.html',
        component: Loadable({
          loader: () => import('./routes/hoc'),
          loading: Loading,
        })
      },
      {
        path: '/use-hooks.html',
        component: Loadable({
          loader: () => import('./routes/useHooks'),
          loading: Loading,
        })
      }
      ]
    }
  ]
  return <div>{renderRoutes(routes, props)}</div>
}