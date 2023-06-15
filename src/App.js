import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {PrivateRoute} from './use-cases/';
import {Home, Login, NotFound, Single, Inventory, Customer} from "./components/pages"
import {SiteSettingsProvider, ThemeProvider} from "./contexts";
import { InventoryRoutes } from './components/pages/inventory/InventoryRoutes';

function App() {
  return (
      <ThemeProvider>
        <SiteSettingsProvider>
          <BrowserRouter basename={''}>
            <Routes>
              <Route
                  path={'/'}
                  element={
                      <Home />
                  }
              >
                <Route
                    path={'/inventory/*'}
                    element={
                      <PrivateRoute roles={['ROLE_STAFF', 'ROLE_ADMIN', 'ROLE_PHARMACIST']} minlevel={2}>
                        <InventoryRoutes />
                      </PrivateRoute>
                    }
                />
                <Route
                    path={'/customers'}
                    element={
                      <PrivateRoute roles={['ROLE_ADMIN', 'ROLE_PHARMACIST']} minlevel={3}>
                        <Customer />
                      </PrivateRoute>
                    }
                />
                <Route
                    path={'/users'}
                    element={
                      <PrivateRoute roles={['ROLE_ADMIN']} minlevel={4}>
                        <Single />
                      </PrivateRoute>
                    }
                />
              </Route>
              <Route path={'/login'} element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </SiteSettingsProvider>
      </ThemeProvider>
  );
}

export default App;
