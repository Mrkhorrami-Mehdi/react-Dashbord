import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { AppProvider } from './context';
import { theme } from './theme';

import { ThemeProvider } from '@mui/material';
import './index.css';




const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <AppProvider>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </AppProvider>
)

