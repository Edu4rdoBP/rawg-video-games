"use client"

import * as S from '@/styles/components/Select';
import { ChangeEvent } from 'react';
import { ISelectProps } from '@/@types/Select';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';


export default function Select({ type, data, defaultData }: ISelectProps) {
  const router = useRouter();
  const t = useTranslations('Header');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    if (type === 'selectLanguage') {
      router.push(selectedValue)
    }
  }
  return (
    <S.Select onChange={handleChange} defaultValue={defaultData}>
      {data.map(({ value, label }, index) => {
        return (
          <S.Option key={`options-select-${index}`} value={value}>
            {t(`${label}`)}
          </S.Option>
        );
      })}
    </S.Select>
  );
}