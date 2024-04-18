import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
import UserProfile from "./components/UserProfile";

function App() {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  function handleLogIn() {
    dispatch(authActions.login());
  }
  function handleLogOut() {
    dispatch(authActions.logout());
  }
  console.log(auth);
  return (
    <>
      {<Header onSelect={auth ? handleLogOut : handleLogIn} />}
      {!auth ? (
        <Auth onSelect={auth ? handleLogOut : handleLogIn} />
      ) : (
        <UserProfile />
      )}
      <Counter />
    </>
  );
}

export default App;
