import React from 'react'
import { createRoot } from 'react-dom/client'
import DemoApp from './DemoApp'
import './index.css'

const container = document.getElementById('DemoApp');
const root = createRoot(container!);
root.render(<DemoApp />);