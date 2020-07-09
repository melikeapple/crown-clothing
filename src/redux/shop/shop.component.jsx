import React, {useEffect} from "react";
import {Route} from 'react-router-dom';
import CollectionPageContainer from "../../pages/collection/collection.container";
import CollectionsOverviewContainer from "../../components/collection-overview/collection-overview.container";
import {connect} from 'react-redux';
import {fetchCollectionsStart} from "./shop.actions";

const ShopPage = ({fetchCollectionsStart, match}) => {
    useEffect(() => {
        fetchCollectionsStart();
    },[fetchCollectionsStart])
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`}
                   component={CollectionsOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`}
                   component={CollectionPageContainer}/>
        </div>
    )
}

export const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);