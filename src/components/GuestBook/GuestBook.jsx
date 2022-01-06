import { useState } from 'react';
import { useEntry } from '../../context/EntryContext';
import { useUser } from '../../context/UserContext';
import React from 'react';

export default function GuestBook() {
  const [guestEntry, setGuestEntry] = useState('');
  const { entries, setEntries } = useEntry();
  const { user, setUser } = useUser();

  function updateGuestName() {
    if (!guestEntry) return;
    setEntries([...entries, { name: user, message: guestEntry }]);
    setGuestEntry('');
  }

  const handleSubmit = (e) => {
    console.log('submitted');
    e.preventDefault();
    updateGuestName();
  };

  const displayMessage = user
    ? `Thanks for signing, ${user}!`
    : 'Please sign the Guestbook!';

  return (
    <>
      <h1>{displayMessage}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label className="labelText" htmlFor="guestEntry">
              Guest Entry
            </label>
          </div>
          <div>
            <textarea
              id="guestEntry"
              value={guestEntry}
              placeholder="Your entry!"
              onChange={(e) => setGuestEntry(e.target.value)}
            />
          </div>
        </div>

        <button type="submit">Sign</button>
      </form>
      {user && (
        <button
          className="signout"
          onClick={() => {
            console.log('on click');
            setUser('');
            setName('');
          }}
        >
          Not {user}?
        </button>
      )}
    </>
  );
}
