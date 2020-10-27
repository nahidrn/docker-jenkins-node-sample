import React from 'react';
import {TagRow} from './';

export default function LogPostGridItem ({logpost, tagsOnTop}) {

    const widnowWidth = window.innerWidth;
    const imageBg = {backgroundImage: `url("${require(`../../assets/images/places/${logpost.image}`)}")`};

    const style = widnowWidth > 900 ? {...imageBg, ...logpost.style} : imageBg;

    return (
        <a className="logpost-grid-item overlay" style={style} href={logpost.link} > 
            <div className="image-text" style={{justifyContent: tagsOnTop ? 'space-between' : 'flex-end'}}>
                <TagRow tags={logpost.categories} />
                <div>
                    <h2 className="image-title">{logpost.title}</h2>
                    <span className="image-date">{logpost.date}</span>
                </div>
            </div> 
        </a>
    )
}