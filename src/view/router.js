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
export default function RootRouter(props) {
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
        path: '/function-bind.html',
        component: Loadable({
          loader: () => import('./routes/FunctionBind'),
          loading: Loading,
        })
      },
      {
        path: '/hock.html',
        component: Loadable({
          loader: () => import('./routes/Hock'),
          loading: Loading,
        })
      },
      {
        path: '/life-cycle.html',
        component: Loadable({
          loader: () => import('./routes/LifeCycle'),
          loading: Loading,
        })
      }
        ,
      {
        path: '/transaction-about.html',
        component: Loadable({
          loader: () => import('./routes/TransactionAbout'),
          loading: Loading,
        })
      },
      {
        path: '/diff.html',
        component: Loadable({
          loader: () => import('./routes/Diff'),
          loading: Loading,
        })
      },
      {
        path: '/event-about.html',
        component: Loadable({
          loader: () => import('./routes/EventAbout'),
          loading: Loading,
        })
      },
      {
        path: '/context-api.html',
        component: Loadable({
          loader: () => import('./routes/ContextAPI'),
          loading: Loading,
        })
      },
      {
        path: '/export-require.html',
        component: Loadable({
          loader: () => import('./routes/Export/Require'),
          loading: Loading,
        })
      },
      {
        path: '/export-import.html',
        component: Loadable({
          loader: () => import('./routes/Export/Import'),
          loading: Loading,
        })
      },
      ]
    }
  ]
  return <div>{renderRoutes(routes, props)}</div>
}