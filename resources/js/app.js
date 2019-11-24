/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Layout from './layout/Layout';
import React from 'react';
import ReactDOM from 'react-dom';
import Bus from './Bus';

window.flash = (message, type="success") => Bus.emit('flash', ({message, type}));

import { BrowserRouter } from 'react-router-dom';

if (document.getElementById('react-app')) {
    ReactDOM.render(
 		<BrowserRouter>
    		<Layout />
    	</BrowserRouter>,
    	 document.getElementById('react-app')
    );
}
