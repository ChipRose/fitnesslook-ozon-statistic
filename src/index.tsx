import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactVirtualizedTable from './components/ReactVirtualizedTable/ReactVirtualizedTable';
import { StyledEngineProvider } from '@mui/material';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ReactVirtualizedTable />
    </StyledEngineProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
