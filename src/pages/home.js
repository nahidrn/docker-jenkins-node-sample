/**
 * @author NahidRahman
 * @description
 * Landing page
 * 
 */

import React from 'react';
import {LogPostGrid} from '../components/common';
import vlogs from '../assets/mocks/vlogs';

export default function Home () {
    return (
        <section className="container home">
            <div className="row">
                <h2>Tripologs - Vlogs</h2>
                {/* Include LogPostGrid components */}
                <LogPostGrid logposts={vlogs} columns={3} />
            </div>
        </section>
    )
}