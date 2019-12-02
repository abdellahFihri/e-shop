import React from 'react';
import CollectionItem from '../collection-items/collection-item'
import './preview-collection.styles.scss'

const PreviewCollection=({title,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
            .filter((item,index)=> index < 4) //filtering by 4 items before maping
            .map(item=>(
            <CollectionItem key={item.id} item={item}/>
               
           
                ))}
        </div>
    </div>
)
export default PreviewCollection