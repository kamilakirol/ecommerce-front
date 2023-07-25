"use client";

import CartContextProvider from "@/components/CartContext";
import StyledComponentsRegistry from "./registry";
import { createGlobalStyle } from "styled-components";
import Header from "@/components/Header";

const GlobalStyles = createGlobalStyle`
body{
padding:0;
margin:0;
font-family: 'Poppins', sans-serif;
background-color: #eee;
}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <GlobalStyles />
        <CartContextProvider>
          <body>
            <Header />
            {children}
          </body>
        </CartContextProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
