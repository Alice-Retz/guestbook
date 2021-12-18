import { useEntry } from '../../context/EntryContext';
import React from 'react';
import Entry from '../Entry/Entry';

export default function EntryList() {
  const { entries } = useEntry();

  return (
    <div>
      <ul>
        {entries.map((entry) => {
          return (
            <li key={`${entry.name}-${entry.message}`}>
              <Entry entry={entry} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
