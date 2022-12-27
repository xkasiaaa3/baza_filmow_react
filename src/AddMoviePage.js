import "./App.css";
import HeaderSection from "./components/HeaderSection";
import LoginSection from "./components/LoginSection";
import MoviesPanel from "./components/MoviesPanel";
import Footer from "./components/Footer";
import AddMovieSection from "./components/AddMovieSection";

function AddMoviePage() {
  return (
    <div className="AppStyle">
      <AddMovieSection />
      <Footer />
    </div>
  );
}

export default AddMoviePage;
