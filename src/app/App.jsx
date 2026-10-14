import Header from "../components/layout/Header/Header";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import Footer from "../components/layout/Footer/Footer";
import HomePage from "../pages/HomePage/HomePage";
import PlaylistPage from "../pages/PlaylistPage/PlaylistPage";
import SoundbarDrawer from "../components/soundbar/SoundbarDrawer/SoundbarDrawer";
import AuthModal from "../components/auth/AuthModal/AuthModal";

export default function App() {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <HomePage />
        <PlaylistPage />
      </div>
      <Footer />
      <SoundbarDrawer />
      <AuthModal />
    </div>
  );
}
