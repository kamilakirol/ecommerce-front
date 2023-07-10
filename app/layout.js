"use client";

import StyledComponentsRegistry from "./registry";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body{
padding:0;
margin:0;
font-family: 'Roboto', sans-serif;
}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <GlobalStyles />
        <body>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
