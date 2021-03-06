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
        path: '/hook.html',
        component: Loadable({
          loader: () => import('./routes/Hook'),
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
        path: '/fdjl.html',
        component: Loadable({
          loader: () => import('./routes/FdJl'),
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
      {
        path: '/promise-about.html',
        component: Loadable({
          loader: () => import('./routes/PromiseAbout'),
          loading: Loading,
        })
      },
      {
        path: '/object-about.html',
        component: Loadable({
          loader: () => import('./routes/ObjectAbout'),
          loading: Loading,
        })
      },
      {
        path: '/my-promise.html',
        component: Loadable({
          loader: () => import('./routes/myPromise'),
          loading: Loading,
        })
      },
      {
        path: '/deep-clone.html',
        component: Loadable({
          loader: () => import('./routes/DeepClone'),
          loading: Loading,
        })
      },
      {
        path: '/my-promise.html',
        component: Loadable({
          loader: () => import('./routes/myPromise'),
          loading: Loading,
        })
      },
      {
        path: '/timer.html',
        component: Loadable({
          loader: () => import('./routes/Timer'),
          loading: Loading,
        })
      },
      {
        path: '/sort.html',
        component: Loadable({
          loader: () => import('./routes/Sort'),
          loading: Loading,
        })
      },
      {
        path: '/async-send-request.html',
        component: Loadable({
          loader: () => import('./routes/SyncSendRequest'),
          loading: Loading,
        })
      },
      {
        path: '/css-about.html',
        component: Loadable({
          loader: () => import('./routes/CssAbout'),
          loading: Loading,
        })
      },
      {
        path: '/es6.html',
        component: Loadable({
          loader: () => import('./routes/ES6'),
          loading: Loading,
        })
      },
      {
        path: '/curry.html',
        component: Loadable({
          loader: () => import('./routes/Curry'),
          loading: Loading,
        })
      },
      ]
    }
  ]
  return <div>{renderRoutes(routes, props)}</div>
}