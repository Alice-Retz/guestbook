import { useHistory } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Auth() {
  const { setUser } = useUser();
  const location = useLocation();
  const history = useHistory();
  const auth = useAuth();
  const { formState, handleFormState } = useForm({
    username: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const { from } = location.state || { from: { pathname: '/' } };

  return (
    <div>
      <legend>Sign In</legend>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username" required />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" required />
        <button type="submit" aria-label="sign-in">
          Sign In
        </button>
      </form>
      <Link to="/">View Guestbook</Link>
    </div>
  );
}
