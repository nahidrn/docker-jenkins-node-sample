/**
 * @author NahidRahman
 * @description
 * Landing page
 * 
 */

import React from 'react';
import {LogPostGrid, LogPostGridItem} from '../components/common';
import vlog from '../assets/mocks/vlogs';
import blog from '../assets/mocks/blogs';

const vlogConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3'
    }
};

const blogConfig = {
    0: {
        gridArea: '1 / 1 / 2 / 3',
        height: '300px'
    },
    1: {
        height: '300px'
    },
    3: {
        height: '630px',
        marginLeft: '30px',
        width: '630px'
    }
}

const mergeStyles = function (logposts, vlogConfig) {
    logposts.forEach((logpost, index) => {
        logpost.style = vlogConfig[index];
    });
};

mergeStyles(vlog, vlogConfig);
mergeStyles(blog, blogConfig);

const lastBlogPost = blog.pop();

export default function Home () {
    return (
        <main>
            <section className="container home">
                <div className="row">
                    <h1>Tripologs - Blogs</h1>
                    <section className="vlog-posts-container">
                        {/* Include LogPostGrid components */}
                        <LogPostGrid logposts={blog} columns={2} tagsOnTop={true} />
                        <LogPostGridItem logpost={lastBlogPost} tagsOnTop={true} />
                    </section>
                    <h1>Tripologs - Vlogs</h1>
                    {/* Include LogPostGrid components */}
                    <LogPostGrid logposts={vlog} columns={3} />
                </div>
            </section>
        </main>
    )
}