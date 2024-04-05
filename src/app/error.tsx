'use client';

import NotFound from './not-found';

export default function Error() {
  return <NotFound status={500} />;
}
