import { CalMeet } from '@/components/contact/cal-meet';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meeting',
  description:
    'Let’s set up a time to chat! Schedule a meeting with me, and we can discuss your ideas or projects.',
};

export default function Page() {
  return (
    <section>
      <h2 className="title">Schedule a Meet</h2>
      <div className="prose max-w-full">
        <CalMeet />
      </div>
    </section>
  );
}
