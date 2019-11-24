import React from 'react';
import {withRouter} from 'react-router-dom'//and high order function that returns modified components that have access to router props n history
import './menu-item.style.scss'
const MenuItem=({title,imageUrl,size,history,linkUrl,match,id})=>(
    <div  id={id} className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}> {/*  dynamic size property to add to the className from props then we secify style for large classes in scss */}
    <div className="background-image" style={{
backgroundImage:`url(${imageUrl})`}}/>
    <div className="content">
<h1 className="title">{title.toUpperCase()}</h1>
<span className="subtitile">SHOP NOW</span>
    </div>
</div>
)
export default withRouter (MenuItem)// specifying MenuItem as param for withRouter to export it ass super powered component