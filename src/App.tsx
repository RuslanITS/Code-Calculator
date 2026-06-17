import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Calculator from "./pages/CalculatorPage/Calculator.tsx";
import type { RootState } from "./app/store.ts";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Password from "./pages/PasswordPage/Password.tsx";
import './App.css'

const App = () => {

  const isAuthorized = useSelector(
    (state: RootState) => state.auth.isAuthorized
  );

  return (
    <div className="app">
      <Header />

      <main className="content">
        <Container className="py-4">
          {isAuthorized
            ? <Calculator />
            : <Password />
          }
        </Container>
      </main>
      <Footer />
    </div>
  )
};

export default App
