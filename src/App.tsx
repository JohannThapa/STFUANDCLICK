import React, { Suspense, lazy } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Authentication from './components/layout/authentication';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/layout';
import routes from './routes';
import Loader, { LoaderType } from './components/layout/loader';
import store, { persistor } from './store';

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={<Loader type={LoaderType.OVERLAY} />} persistor={persistor}>
      <Suspense fallback={<Loader type={LoaderType.OVERLAY} />}>
        <Authentication>
          <Router>
            <Layout>
              {/* <Route path={routes.ROOT} component={() => <Redirect to={routes.BOARD} />} exact /> */}
              {/* <Route path={routes.BOARD} component={lazy(() => import('components/Board'))} exact />
              <Route path={`${routes.GAME}/:teamName`} component={lazy(() => import('components/Game'))} exact /> */}
            </Layout>
          </Router>
        </Authentication>
      </Suspense>
    </PersistGate>
  </Provider>
  );
}

export default App;
