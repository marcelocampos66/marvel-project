// import { useContext } from "react";
// import myContext from "../context/AppContext";

function logout() {
  // const { setRedirect } = useContext(myContext);
  localStorage.removeItem('shlToken')
  setRedirect(true);
};

export default logout;
