import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import { AuthProvider, useAuthContext } from "./context/AuthContext";
import "./App.css";
import MainApp from "./MainApp";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PrivateRoute />} />
          <Route path="/login" element={<Login />} />
          <Route path="/MainApp" element={<MainApp />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export function PrivateRoute() {
  const { user } = useAuthContext();

  return user ? <MainApp /> : <Navigate to="/login" replace />;
}


export default App;
