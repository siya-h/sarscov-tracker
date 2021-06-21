import { MDBContainer } from 'mdbreact';
import React from 'react'
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import format from 'date-fns/format'

const Today = () => {
    const { data } = useSelector(state => state.data)
    const {Active, Confirmed, Deaths, Recovered} = data[0]
    const info = {
        labels: ['Confirmed','Active', 'Recovered', 'Deaths' ],
        datasets: [{
            data: [Confirmed, Active, Recovered, Deaths],
            backgroundColor: ['#ffbb33', '#33b5e5', '#00C851', '#ff4444']
        }]
    }
    const options = {
        maintainAspectRatio: false,
        title: {
            display: false,
            text: "'Today's status"
        },
        legend: {
            display: false
        }
    }
    return (
        <MDBContainer style={{height: 500}} className="mt-3">
        <h2>South Africa</h2>
            <div>Date: {format(new Date(), 'dd/MMM/yyyy')}</div>
            <Bar 
                data={info}
                options={options}
            />
        </MDBContainer>
    )
}

export default Today
