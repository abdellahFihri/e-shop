import React from 'react';
import {connect} from 'react-redux'
import {SelectCollection} from '../../redux/shop/shop.selector'
import CollectionItem from '../../components/collection-items/collection-item'

import './collection.style.scss'

const Collection=({collection})=>{
    const {title,items}=collection
    return(
    <div className="category">
<h2 className='title'>{title}</h2>
<div className="items">
    {
        items.map(item=>(<CollectionItem key={item.id} item={item}/>))
    }
</div>
    </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        collection: SelectCollection(ownProps.match.params.categoryId)(state)
    }
}
export default connect (mapStateToProps)(Collection)
