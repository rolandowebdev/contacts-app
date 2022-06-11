import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './components/ContactApp';

// Styling
import './style/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<ContactApp />);
