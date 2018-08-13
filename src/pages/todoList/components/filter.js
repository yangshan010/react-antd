import React, { Component } from 'react'
import { connect } from 'react-redux'
import {FilterTypes} from '../contants'
import Link from './link'
 const Filter = () =>  {
        return (
            <div>
                {/* <button>全部</button>
                <button>未完成</button>
                <button>已完成</button> */}
                <Link   filterType={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
                <Link   filterType={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
                <Link   filterType={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
            </div>
        )
}
export default Filter
