import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const Medicine = () => {
    let navigate = useNavigate()
    let medicine = [
        {
            id: 101,
            name: 'Abacavir',
            quantity: 25,
            price: 150,
            expiry: 2022
        },
        {
            id: 102,
            name: 'Eltrombopag',
            quantity: 90,
            price: 550,
            expiry: 2021
        },
        {
            id: 103,
            name: 'Meloxicam',
            quantity: 85,
            price: 450,
            expiry: 2025
        },
        {
            id: 104,
            name: 'Allopurinol',
            quantity: 50,
            price: 600,
            expiry: 2023
        },
        {
            id: 105,
            name: 'Phenytoin',
            quantity: 63,
            price: 250,
            expiry: 2021
        },
    ]
    return (
        <React.Fragment>
            <div className='container'>
                <h1 style={{ color: '#000', fontSize: '40px', marginBottom: '1vw' }}>Medicine List</h1>
                <table border={1} style={{ width: '900px', textAlign: 'center' }}>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>QUANTITY</th>
                            <th>PRICE</th>
                            <th>EXPIRY</th>
                        </tr>
                        {
                            medicine.map((data, index) =>
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.quantity}</td>
                                    <td>{data.price}</td>
                                    <td>{data.expiry}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <button className='m-btn' onClick={()=>navigate('/')}>Back</button>
            </div>
        </React.Fragment>
    )
}

export default Medicine