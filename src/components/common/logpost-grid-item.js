import React from 'react';
import {categoryColors} from './styles';

export default function LogPostGridItem ({logpost, tagsOnTop}) {

    const style= {backgroundImage: `url("${require(`../../assets/images/places/${logpost.image}`)}")`};

    return (
        <a className="logpost-grid-item overlay" style={style} href={logpost.link} > 
            <div className="image-text">
                <div className="tags-container">
                    { logpost.categories.map((tag, index) =>
                        <span key={index} className="tag" style={{backgroundColor: categoryColors[tag]}}>
                            {tag.toUpperCase()}
                        </span>
                    )}
                </div>
                <div>
                    <h2 className="image-title">{logpost.title}</h2>
                    <span className="image-date">{logpost.date}</span>
                </div>
            </div> 
        </a>
    )
}