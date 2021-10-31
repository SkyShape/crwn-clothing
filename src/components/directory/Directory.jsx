import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-items/MenuItem';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';
import { DirectoryContainer } from './directoryStyles';

const Directory = ({sections}) =>{
        return (
            <DirectoryContainer>
            {
                sections.map(({id, ...otherSections}) => (
                    < MenuItem  key={id} {...otherSections}/>
                ))
            }
            </DirectoryContainer>
        )
    
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);