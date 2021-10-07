import { createSignal } from 'solid-js';

export function useSidebar() {
  const [hello, setHello] = createSignal('');

  return [hello, { setHello }] as const;
}
