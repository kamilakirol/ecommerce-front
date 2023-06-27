"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body{
padding:0;
}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
