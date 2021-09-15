import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-items/MenuItem';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';

const Directory = ({sections}) =>{
        return (
            <div className="directory-menu">
            {
                sections.map(({id, ...otherSections}) => (
                    < MenuItem  key={id} {...otherSections}/>
                ))
            }
            </div>
        )
    
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);