import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shopActions';
import WithSpiner from '../../components/with-spiner/With-spinner';

const CollectionsOverviewWithSpiner = WithSpiner(CollectionsOverview);
const CollectionPageWithSpiner = WithSpiner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        })
    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpiner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`}  render={(props)=><CollectionPageWithSpiner isLoading={loading} {...props} />}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage) ;