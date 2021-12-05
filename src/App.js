import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import AppBar from './components/AppBar';

const HomeView = lazy(() => import('./views/HomeView'));
const RecipesView = lazy(() => import('./views/RecipesView'));

export default function App() {
  const { home, recipes } = routes;

  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path={home} element={<HomeView />} />
          <Route path={recipes} element={<RecipesView />} />
          <Route path="*" element={<Navigate replace to={home} />} />
        </Routes>
      </Suspense>
    </>
  );
}
