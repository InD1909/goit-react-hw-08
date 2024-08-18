import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const Navigation = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <>
      <header>
        <h1>CONTACTIO</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="contacts">Contacts</NavLink>
            </li>

            {!isLoggedIn && (
              <>
                <li>
                  <NavLink to="login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="register">Register</NavLink>
                </li>
              </>
            )}
            {isLoggedIn && (
              <>
                <li>
                  <h2>{user.name}</h2>
                </li>
                <li>
                  <button onClick={() => dispatch(logoutThunk())}>Exit</button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
