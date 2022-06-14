import { useEffect, useState } from "react";
// import AppRouter from "./Router";
import AppRouter from "components/Router"
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          uid: user.uid,
          displayName: user.displayName,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(false);
      }
      setInit(true);
    });
  },[]);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      uid: user.uid,
      displayName: user.displayName,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  // setInterval(() => console.log(authService.currentUser),2000);
    
  return (
    // <>
    //   {init ? (<AppRouter isLoggedIn={isLoggedIn} userObj={userObj}/>
    //   ) : (
    //     "initializing..."
    //   ) }
    //   {/* <footer>&copy; {new Date().getFullYear()} Nwitter</footer> */}
    // </>
    <>
    {init ? (
      <AppRouter
        refreshUser={refreshUser}
        isLoggedIn={Boolean(userObj)}
        userObj={userObj}
      />
    ) : (
      "initializing..."
    )}
    </>
  );
}

export default App;
