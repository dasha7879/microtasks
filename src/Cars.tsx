import React from 'react';

type CarsType = {
    cars: TopCarType[]
}

type TopCarType = {
    manufacturer: string,
    model: string
}

export const Cars = (props: CarsType) => {
    let cars = props.cars.map((car: TopCarType, index: number) =>
        <tr>
            <td key={index}>{index}</td>
            <td key={index}>{car.manufacturer}</td>
            <td key={index}>{car.model}</td>
        </tr>

    )
    return (
        <>
            <table>
                <tr>
                    <th>index</th>
                    <th>manufacturer</th>
                    <th>model</th>
                </tr>
                <tr>
                    {cars}
                </tr>
            </table>

        </>


    )
}