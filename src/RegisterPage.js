import "./App.css";
import HeaderSection from "./components/HeaderSection";
import RegisterSection from "./components/RegisterSection";
import MoviesPanel from "./components/MoviesPanel";
import Footer from "./components/Footer";

function RegisterPage() {
  return (
    <div className="AppStyle">
      <RegisterSection />
      <Footer />
    </div>
  );
}

export default RegisterPage;
