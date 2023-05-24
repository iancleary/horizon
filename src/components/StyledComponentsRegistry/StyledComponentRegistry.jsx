'use client';
// This is required so that the CSS is extracted and injected on
// the server, to avoid a Flash of Unstyled Content.
//
// More info:
// https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components
//
// Found via:
// https://github.com/joy-of-react/next-13-styled-components/blob/b7493f64972fa9078986045347e6543d4dff6c2e/src/components/StyledComponentsRegistry/StyledComponentsRegistry.js

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({
  children,
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
