import React from "react";
import ReactDOM from "react-dom/client";
import thunk from "redux-thunk";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./index.css";
import { legacy_createStore as createStore, applyMiddleware } from "redux";

const store = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <TodoForm />
    <TodoList />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
