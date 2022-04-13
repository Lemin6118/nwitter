import { useState } from "react";
// import AppRouter from "./Router";
import AppRouter from "components/Router"
import { authService } from "fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
    
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
