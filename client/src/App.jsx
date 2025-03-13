import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminProducts from "./pages/admin-view/products";
import AdminFeatures from "./pages/admin-view/features";
import AdminDashboard from "./pages/admin-view/dashboard";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found";
import ShoppingAccount from "./pages/shopping-view/account";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import CheckAuth from "./components/common/check-auth";
import NotAllowed from "./pages/auth/noauth";
import { Toaster } from "sonner";
import { useSelector } from "react-redux";

function App() {
  // check actual data from backend
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common components */}
      {/* <h1>Header Component</h1> */}

      <Routes>
        <Route
          path={"/auth"}
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
              <Toaster />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route
          path={"/admin"}
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path={"orders"} element={<AdminProducts />} />
          <Route path={"features"} element={<AdminFeatures />} />
          <Route path={"products"} element={<AdminProducts />} />
          <Route path={"dashboard"} element={<AdminDashboard />} />
        </Route>
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="unauth-page" element={<NotAllowed />} />
      </Routes>
    </div>
  );
}

export default App;
