import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col antialiased">
      {/* Fixed top navbar */}
      <Navbar />

      {/* CRITICAL FIX: 
        pt-20 creates an 80px space at the top of the body flow.
        This forces the Hero section to render safely BELOW your navbar.
        flex-1 ensures your footer always stays pushed to the bottom.
      */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* Global application footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;