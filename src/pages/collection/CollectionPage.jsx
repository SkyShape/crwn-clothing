import React from 'react';
import {connect} from 'react-redux';

import './CollectionPage.scss';
import CollectionItem from '../../components/collection-item/CollectionItem';
import { selectCollection } from '../../redux/shop/shopSelectors';

const CollectionPage = ({collection}) => {
    console.log(collection)
    const {title, items} = collection;
    return (
        <div className='collection-page'>
            <h2 className="title">{title}</h2>
            <div className="items">
            {
                items.map(item=> <CollectionItem key={item.id} item={item} />)
            }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) =>(
    {
        collection: selectCollection(ownProps.match.params.collection)(state)
    }
)

export default connect(mapStateToProps)(CollectionPage);
