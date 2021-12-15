import EntryList from '../../components/EntryList/EntryList';
import GuestBook from '../../components/GuestBook/GuestBook';
import { EntryProvider } from '../../context/EntryContext';

export default function Home() {
  return (
    <EntryProvider>
      <GuestBook />
      <EntryList />
    </EntryProvider>
  );
}
