/*eslint-disable*/
import './App.css';
import {RouterProvider} from "react-router-dom"
import router from './router/router';
import Counter from './components/Counter';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App