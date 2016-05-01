"use strict";

import React from 'react';
import {render} from 'react-dom';
import App from './components/App.jsx';
import './main.css';
import socket from 'socket.io-client';

const io = socket('http://localhost:5000');

render(<App io={io} />, document.getElementById('root'));
