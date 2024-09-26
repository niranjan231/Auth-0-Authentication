import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";



function App() {
  const { loginWithRedirect,logout,isAuthenticated,user  } = useAuth0();
  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }


  return (
    <div>
    <div className="app-1">
    <h1>Welcome User</h1>
   
    
    </div>
    {
      isAuthenticated ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
    :
    <button onClick={() => loginWithRedirect()}>Log In</button>
    }
    <div>{



isAuthenticated && <h2>{user.email}</h2>
      }</div>
    </div>
  );
}

export default App;
