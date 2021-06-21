import React from 'react'
import { useSelector } from 'react-redux'
import DataItem from '../components/DataItem'

const AllStatus = () => {
    const { data } = useSelector(state => state.data)
    return (
        <>
            {
                data.map((item) => <DataItem key={item.ID} data={item} />)
            }
        </>
    )
}

export default AllStatus
