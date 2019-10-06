import React, { Component } from 'react';
// Connect the Shop component to Redux
import { connect } from 'react-redux';

// Add routing to shop page
import { Route } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';


class ShopPage extends Component {

    componentDidMount() {
        const { fetchCollectionsStart } = this.props
        fetchCollectionsStart();
    }

    render() {
        const { match } = this.props;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                 />
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);
