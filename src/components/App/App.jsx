import './App.css';

import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from 'layouts/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
