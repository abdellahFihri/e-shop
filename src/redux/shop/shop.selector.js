import {createSelector} from 'reselect';

const selectShop=state=>state.shop; // gets the state n returns from it state.shop
export const selectCollections=createSelector(
    [selectShop],
    shop=>shop.collections
)
export const selectCollectionsForPreview=createSelector(
    [selectCollections],
    collections=>Object.keys(collections).map(key=>collections[key])//map in object n retrieve key
)
export  const SelectCollection=collectionUrlParam=>
createSelector(
    [selectCollections],
    collections=>collections[collectionUrlParam])
