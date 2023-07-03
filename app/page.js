"use client";

import Header from "@/components/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body{
padding:0;
margin:0;
font-family: 'Roboto', sans-serif;
}
`;

export default function Home() {
  return (
    <div>
      <GlobalStyles />
      <Header />
    </div>
  );
}
