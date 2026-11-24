'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';

const TRANSCRIPT =
  'Your car tax for AB12 CDE runs out Friday. Want me to remind you again tomorrow?';

export default function HomeMotion({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const shot = /(?:^|[?&])shot=1(?:&|$)/.test(window.location.search);
    const settled = reduced || shot || document.documentElement.classList.contains('is-settled');
    if (settled) document.documentElement.classList.add('is-settled');

    const typed = root.querySelector<HTMLElement>('#typed');
    const cursor = root.querySelector<HTMLElement>('#cursor');
    const rotator = root.querySelector<HTMLElement>('#rotator');
    const live = root.querySelector<HTMLElement>('#rotator-live');
    const words = rotator ? Array.from(rotator.children) : [];
    const timers: number[] = [];
    let interval = 0;

    if (settled) {
      if (typed) typed.textContent = TRANSCRIPT;
      if (cursor) cursor.hidden = true;
    } else if (typed) {
      typed.textContent = '';
      let index = 0;
      const tick = () => {
        index += 1;
        typed.textContent = TRANSCRIPT.slice(0, index);
        if (index < TRANSCRIPT.length) {
          const delay = 28 + (TRANSCRIPT[index - 1] === ' ' ? 40 : 0);
          timers.push(window.setTimeout(tick, delay));
        }
      };
      timers.push(window.setTimeout(tick, 1400));
    }

    if (!settled && rotator && words.length > 1) {
      let index = 0;
      rotator.classList.add('is-animating');
      interval = window.setInterval(() => {
        index = (index + 1) % words.length;
        rotator.style.transform = `translateY(${-index * 100}%)`;
        const label = words[index]?.textContent?.trim();
        if (live && label) live.textContent = label;
      }, 2200);
    }

    const seen = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in');
          if (
            !settled &&
            entry.target.getAttribute('data-animate') === 'todo' &&
            !seen.has(entry.target)
          ) {
            seen.add(entry.target);
            entry.target.querySelectorAll('li.will').forEach((item, n) => {
              timers.push(
                window.setTimeout(() => item.classList.add('done'), 600 + n * 550),
              );
            });
          }
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.22 },
    );

    root.querySelectorAll('.panel, .t-item').forEach((node) => io.observe(node));

    const buttons = Array.from(root.querySelectorAll<HTMLButtonElement>('#feat-index button'));
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          buttons.forEach((button) => {
            button.classList.toggle('is-on', button.getAttribute('data-target') === entry.target.id);
          });
        });
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: 0.1 },
    );
    root.querySelectorAll('.panel').forEach((panel) => spy.observe(panel));

    const onIndexClick = (event: Event) => {
      const button = (event.target as HTMLElement | null)?.closest('button');
      if (!button) return;
      const id = button.getAttribute('data-target');
      const target = id ? root.querySelector(`#${id}`) : null;
      target?.scrollIntoView({ behavior: reduced || shot ? 'auto' : 'smooth', block: 'center' });
    };
    const index = root.querySelector('#feat-index');
    index?.addEventListener('click', onIndexClick);

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.clearInterval(interval);
      io.disconnect();
      spy.disconnect();
      index?.removeEventListener('click', onIndexClick);
    };
  }, []);

  return (
    <div ref={ref} style={{ display: 'contents' }}>
      {children}
    </div>
  );
}
