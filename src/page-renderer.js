/**
 * @author NahidRahman
 * @description
 * Page renderer to generate page with componenets
 * 
 *
 */

import React from 'react';
import {useRouteMatch} from 'react-router-dom';

const generatePage = page => {
    console.log(`Generating page :: ${page}`);
    const component = () => require(`./pages/${page}`).default;

    try {
        return React.createElement(component()); // Create element with components for page
    } catch (err) {
        console.warn(err);
        return React.createElement(() => 404); // If no page implemented in name found show 404
    }
}

export default function PageRenderer () {
    const {
        params: { page }
    } = useRouteMatch();

    return generatePage(page);
}