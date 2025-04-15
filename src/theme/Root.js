import React from 'react';
import DownloadButton from '@site/src/components/DownloadButton';

// Default implementation, that you can customize
export default function Root({children}) {
  return (
    <>
      {children}
      <DownloadButton />
    </>
  );
}
