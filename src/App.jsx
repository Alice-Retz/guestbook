import { UserProvider } from './context/UserContext';
import Home from './views/Home/Home';

export default function App() {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
}
