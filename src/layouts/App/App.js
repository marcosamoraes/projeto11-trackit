import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container } from "./App.styled";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  )
}