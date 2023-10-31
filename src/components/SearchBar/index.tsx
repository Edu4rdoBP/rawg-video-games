'use client';

import * as S from './style';
import { useRef, useState } from 'react';
import { useGameList } from '@/hooks/useGameList';
import { ListView } from './listView';
import { useTranslations } from 'next-intl';

export function SearchBar() {
  const [query, setQuery] = useState<string>('');
  const [focus, setFocus] = useState<boolean>(false);
  const t = useTranslations('Header.searchBar');
  const { fetchGames, gameList, loading } = useGameList();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchGames({ search: query });
  };

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  //Apply a timer before making the request
  //Ensures that the request will only be made at the end of typing
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(async () => {
      fetchGames({ search: e.target.value });
    }, 600);
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.SearchIcon />
        <S.Input
          className='font-medium'
          placeholder={t('placeholder')}
          type='text'
          name=''
          value={query}
          onChange={handleChange}
          onFocus={() => {
            fetchGames({ search: query }).then(() => setFocus(true));
          }}
          onBlur={() => {
            setTimeout(async () => {
              setQuery('');
              setFocus(false);
            }, 300);
          }}
        />
      </S.Form>
      {focus && <ListView t={t} loading={loading} games={gameList} />}
    </S.Wrapper>
  );
}
