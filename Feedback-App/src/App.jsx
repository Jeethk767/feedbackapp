import "./App.css";
import SideBar from "./Components/SideBarComponent/SideBar";
import Feedback from "./Components/Feedback/FeedbackList";
import Roadmap from "./Components/Roadmap/Roadmap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux";
import React from "react";
import AuthTab from "./Components/Auth/AuthTab";
import FeedbackForm from "./Components/Feedback/FeedbackForm";
import ProtectedRoute from "./Components/Route/ProtectedRoute";
import FeedbackDetail from "./Components/Feedback/FeedbackDetail";
import FeedbackEdit from "./Components/Feedback/FeedbackEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main className="md:w-11/12 lg:w-[950px] mx-auto md:mt-12 lg:flex relative">
              <Provider store={store}>
                <SideBar />
                <Feedback />
              </Provider>
            </main>
          }
        />
        <Route
          path="/roadmap"
          element={
            <Provider store={store}>
              <Roadmap />
            </Provider>
          }
        />
        <Route
          path="/signin"
          element={
            <Provider store={store}>
              <AuthTab />
            </Provider>
          }
        />
        <Route
          path="/signup"
          element={
            <Provider store={store}>
              <AuthTab />
            </Provider>
          }
        />
        <Route
          path="/feedback/:id"
          element={
            <Provider store={store}>
              <FeedbackDetail />
            </Provider>
          }
        />
        <Route
          path="/feedback/edit/:id"
          element={
            <Provider store={store}>
              <FeedbackEdit />
            </Provider>
          }
        />
        <Route
          element={
            <Provider store={store}>
              <ProtectedRoute />
            </Provider>
          }
        >
          <Route
            element={
              <Provider store={store}>
                <FeedbackForm />
              </Provider>
            }
            path="/createfeedback"
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
