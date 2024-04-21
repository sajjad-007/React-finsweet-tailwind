import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Route>
      </>
    )
  )

  return (
   <div>
      <RouterProvider
        router={router}
      />
   </div>
  )
}

export default App
