import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home/>}/>
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
