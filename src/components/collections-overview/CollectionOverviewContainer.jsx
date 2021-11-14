import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'


import { selectIsCollectionFetching } from '../../redux/shop/shopSelectors'
import WithSpinner from '../with-spiner/With-spinner'
import CollectionsOverview from './CollectionsOverview'

const mapStateToProps = createStructuredSelector ({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer