'use client';

import { JsonType } from '@/types/common';
import { useCallback, useEffect } from 'react';

export function useOutsideClickDetector(ref: React.RefObject<HTMLElement>, callback: () => void) {
  const handleClick = useCallback(
    (e: JsonType) => {
      if (ref.current && !ref.current.contains(e?.target)) {
        callback();
      }
    },
    [ref, callback]
  );

  useEffect(
    function () {
      document.addEventListener('click', handleClick);
      return function () {
        document.removeEventListener('click', handleClick);
      };
    },
    [handleClick]
  );
}
