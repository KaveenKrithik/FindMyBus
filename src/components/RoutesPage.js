import React from 'react';
import './RoutesPage.css';
import { Link } from 'react-router-dom';

const RoutesPage = () => {
    const routes = ['Route 1', 'Route 2', 'Route 3']; // Example routes

    return (
        <div className="routes-container">
            <h2>Select Your Route</h2>
            <ul>
                {routes.map(route => (
                    <li key={route}>
                        <Link to={`/map?route=${route}`}>{route}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoutesPage;
