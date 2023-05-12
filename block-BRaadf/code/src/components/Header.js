import { UserContext } from './UserContext';
import { useContext } from 'react';
function Header() {
  let mode = useContext(UserContext);
  return (
    <h1 className={`heading ${mode ? 'heading-dark' : 'heading-light'}`}>
      {mode ? 'Dark Mode' : 'Light Mode'}
    </h1>
  );
}

export default Header;
