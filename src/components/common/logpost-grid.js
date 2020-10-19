import React from 'react';
import {LogPostGridItem} from '.';

// The tripologs posts, number of columns in css grid, identify child and parent components
export default function LogPostGrid ({logposts, columns, tagsOnTop}) {
    return (
        <section className="grid" style={{gridTemplateColumns:`repeat(${columns}, minmax(275px, 1fr))`}}> 
            { logposts.map((logpost, index) =>
            /* Shorthand for passing props into a component if the variable name 
            is already the name of the prop, can have an object with another object inside of it
            pass vars into it */
                <LogPostGridItem {...{logpost, index, tagsOnTop, key: index}} />
                
                
            )}
        </section>
    )
}