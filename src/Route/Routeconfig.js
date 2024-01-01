import { createBrowserRouter, Navigate,redirect } from 'react-router-dom'
import Login from '../Screens/LoginPage/Login'
import Order from '../Screens/OrderListingPage/Order'
import Products from '../Screens/ProductListingPage/Products'
import User from "../Screens/UserListingPage/User"


let lStatus = parseInt( window.localStorage.getItem("loggedin") )

console.log(lStatus)


export const ROUTES = createBrowserRouter([
    {
      path: '/',
      element:<Login/>,

      loader:()=>{
        if(parseInt( window.localStorage.getItem("loggedin") )){
            return redirect('/Order')
        }
        return null        
        
      }

    },
    {
      path: '/Order',
      element: <Order/>,
      loader:()=>{
        if(!(parseInt( window.localStorage.getItem("loggedin") ))
        ){
            return redirect('/')
        }
        return null
    }

    },
    {
      path: '/Products',
      element: <Products/>,
      loader:()=>{
        if(!(parseInt( window.localStorage.getItem("loggedin") ))
        ){
            return redirect('/')
        }
        return null
    }
    },
    {
      path: '/User',
      element: <User/>,
      loader:()=>{
        if(!(parseInt( window.localStorage.getItem("loggedin") ))
        ){
            return redirect('/')
        }
        return null
    }
    }
  ])