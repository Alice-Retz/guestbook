import { useUser } from '../../context/UserContext';

export default function Home() {
  const { user } = useUser();

  return <header>{user ? <p>{user}</p> : <p>Sign in!</p>}</header>;
}
