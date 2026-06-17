import { Container } from "react-bootstrap";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Password from "./pages/PasswordPage/Password.tsx";
import Calculator from "./pages/CalculatorPage/Calculator.tsx";
import './App.css'

const App = () => {

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
