import { useSearchProfiles } from '@lens-protocol/react-web';
import { ChangeEvent, Suspense, startTransition, useState } from 'react';

import { Loading } from '../components/loading/Loading';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { ProfileCard } from '../profiles/components/ProfileCard';

type SearchResultsProps = {
  query: string;
};

function SearchResults({ query }: SearchResultsProps) {
  const { data, hasMore, observeRef } = useInfiniteScroll(
    useSearchProfiles({ query, suspense: true }),
  );

  if (data.length === 0) {
    return <p>No profiles found</p>;
  }

  return (
    <div>
      {data.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
      {hasMore && <p ref={observeRef}>Loading more...</p>}
    </div>
  );
}

export function UseSearchProfiles() {
  const [inputValue, setInputValue] = useState('');
  const [selectedQuery, setSelectedQuery] = useState<string>();

  const handleSubmit = () => {
    startTransition(() => {
      setSelectedQuery(inputValue);
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>
        <code>Search Profiles</code>
      </h1>
      <div>
        <input onChange={handleChange} />
        <button onClick={handleSubmit}>Search</button>
      </div>

      <Suspense fallback={<Loading />}>
        {selectedQuery && <SearchResults query={selectedQuery} />}
      </Suspense>
    </div>
  );
}
