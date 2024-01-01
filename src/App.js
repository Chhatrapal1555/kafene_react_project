import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RouterProvider } from 'react-router';
import {ROUTES} from "./Route/Routeconfig"


function App() {

  return (
    <RouterProvider  router={ROUTES} />

  );
}


export default App;
