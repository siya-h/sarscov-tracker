import React from 'react'
import { useSelector } from 'react-redux'
import DataItem from '../components/DataItem'
import Today from '../components/Today'

const AllStatus = () => {
    const { data } = useSelector(state => state.data)
    console.log(data);
    return (
        <>
        <Today />
        </>
    )
}

export default AllStatus
