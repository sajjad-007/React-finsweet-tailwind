import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layout/RootLayout";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import Features from "./pages/feature/Features";
import Pricing from "./pages/pricing/Pricing";
import Faq from "./pages/faq/Faq";
import Blog from "./pages/blog/Blog";

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
