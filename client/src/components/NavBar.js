import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

export default (props) => {
  const history = useHistory();
  const { authenticated, handleLogout } = useContext(AuthContext);

  const rightNavItems = () => {
    if (authenticated) {
      return (
        <>
          <Menu.Item name="logout" onClick={() => handleLogout(history)} />
        </>
      );
    } else {
      return (
        <>
          <Link to="/login">
            <Menu.Item id="login" name="login">
              Login
            </Menu.Item>
          </Link>
          <Link to="/register">
            <Menu.Item id="Register" name="register">
              Register
            </Menu.Item>
          </Link>
        </>
      );
    }
  };
  return (
    <Menu>
      <Link to="/">
        <Menu.Item>Home</Menu.Item>
      </Link>
      <Link to="/available_custom">
        <Menu.Item>Available</Menu.Item>
      </Link>
      <Link to='/cities'>
      <Menu.Item>Cities</Menu.Item>
      </Link>
      <Link to='/find_home'>
      <Menu.Item>Find a Home</Menu.Item>
      </Link>
      <Menu.Menu position="right">{rightNavItems()}</Menu.Menu>
    </Menu>
  );
};
