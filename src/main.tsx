import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./app/store.ts";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <App />
      <ToastContainer
        position="bottom-right"
      />
  </Provider>
)
