import React, {useState, useMemo, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Pagination} from 'antd';
import {TagRow} from './'

export default function PostGrid ({logposts}) {
    const [pageSize, setPageSize] = useState(9);
    const [current, setCurrent] = useState(1);

    const paginatedLogPosts = useMemo(() => {
        const lastIndex = current * pageSize;
        const firstIndex = lastIndex - pageSize;

        return logposts.slice(firstIndex, lastIndex);
    }, [current, pageSize]);

    useEffect(() => {
        window.scroll ({
            top:1200,
            left: 0,
            behavior: 'smooth'
        });
    }, [current, pageSize]);

    return (
        <section className="grid-pagination-container">
            <section className="logpost-grid container">
                {paginatedLogPosts.map((logpost, index) => (
                    <div className="logpost-container">
                        <figure>
                            <Link to={logpost.link}>
                                <img src={require(`../../assets/images/places/${logpost.image}`)} alt={logpost.image}/>
                            </Link>
                        </figure>
                        <TagRow tags={logpost.categories} />
                        <h2>{logpost.title}</h2>
                        <p className="author-text">
                            <span>
                                By:
                                <Link to={`/authors/${logpost.author}`}>
                                    {logpost.author}    
                                </Link>
                            </span>
                            <span>
                                - {logpost.date}
                            </span>
                        </p>
                        <p className="description-text">
                            {logpost.description}
                        </p>
                        <Link to={logpost.link}>Read More &gt; </Link>
                    </div>
                ))}                
            </section>
            <Pagination 
                simple
                showSizeChanger
                onShowSizeChange={setPageSize}
                pageSize={pageSize} 
                total={logposts.length}
                defaultCurrent={current}
                onChange={setCurrent}
            />
        </section>
    )
}