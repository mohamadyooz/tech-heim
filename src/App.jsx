import { useState } from 'react'
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Site/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import AddCategory from './pages/Admin/AddCategory';
import AdminLayout from './pages/AdminLayout';
import Login  from './pages/Auth/Login';
import EmptyLayout from './pages/EmptyLayout';
import Account from './pages/Site/Account/Account';
import Blog from './pages/Site/Blog';
import Contact from './pages/Site/Contact';
import Products from './pages/Site/Products';
import FAQ from './pages/Site/FAQ';
const App  = () => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>}/>
        <Route path="/faq" element={<Layout><FAQ/></Layout>}/>
        <Route path="/products" element={<Layout><Products/></Layout>}/>
        <Route path="/contact" element={<Layout><Contact/></Layout>}/>
        <Route path="/blog" element={<Layout><Blog/></Layout>}/>
        <Route path='/login' element={<EmptyLayout><Login /></EmptyLayout>}/>
        <Route path='/account' element={<Layout><Account/></Layout>}></Route>
        <Route path='/admin/AddCategory' element={
          <ProtectedRoute>
          <AdminLayout><AddCategory /></AdminLayout>
          </ProtectedRoute>
        }/>
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App
