import React from 'react';
import {connect} from 'react-redux'
import {addItem }from '../../redux/cart/cart.action'
import CustomButton from '../custom-button/custom-button'
import './collection-item.styles.scss'

const CollectionItem=({item,addItem})=>{
  const {key,name,price,imageUrl}=item
  return(
    <div key={key} className="collection-item">
        <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
          <div className="collection-footer">
              <span className="name">{name}</span>
              <span className="price">{price}</span>
          </div>
          <CustomButton onClick={()=>addItem(item)} inverted>Add to the cart </CustomButton> {/* onClick fires the action add item with argument item in it */}
        </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
 addItem:item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps) (CollectionItem)