import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Root = () => {
  const navigation = useNavigation();

  // Navigation state check kora
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar />
      <main>
        {/* Jodi page load hoy, tobe loader dekhabe, nahole content (Outlet) */}
        {isLoading ? (
          <div className="min-h-[80vh] flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Root;
