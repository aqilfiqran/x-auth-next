'use client';

import { useState } from 'react';

export function useDropHandler<T extends Element>(dropCallback: (e: React.DragEvent<T>) => void) {
  const [active, setActive] = useState(false);

  function onDrop(e: React.DragEvent<T>) {
    e.preventDefault();
    e.stopPropagation();
    setActive(false);

    dropCallback(e);
  }

  function onDragLeave(e: React.DragEvent<T>) {
    e.preventDefault();
    e.stopPropagation();
    setActive(false);
  }

  function onDragOver(e: React.DragEvent<T>) {
    e.preventDefault();
    e.stopPropagation();
    setActive(true);
  }

  function onDragEnter(e: React.DragEvent<T>) {
    e.preventDefault();
    e.stopPropagation();
    setActive(true);
  }

  return {
    active,
    onDrop,
    onDragLeave,
    onDragOver,
    onDragEnter,
  };
}
