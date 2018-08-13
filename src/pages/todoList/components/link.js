import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../../../redux/action'
 class Link extends Component {
    render() {
        return (
            <a href="#" onClick={(e) => {
                e.preventDefault();
                this.props.onClick()
            }}>{this.props.children}</a>
        )
    }
}
const mapDispatchToProps  = (dispatch,ownProps) => {
    return  {
        onClick: ( ) => {
            dispatch(setFilter(ownProps.filterType))
        }
    }
}
export default connect(null,mapDispatchToProps)(Link)
