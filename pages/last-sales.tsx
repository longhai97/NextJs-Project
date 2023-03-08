import * as React from 'react';
import {useEffect, useState} from "react";

type Props = {};
type ISales = {
    id: string
    username: string
    volume: number | string
}
const LastSales = (props: Props) => {
    const [sales, setSales] = useState<ISales[]>();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        fetch('https://nextjs-course-b0a08-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json')
            .then(res => res.json())
            .then(data => {
                const transformedSale = [];
                for (const key in data) {
                    transformedSale.push({id: key, username: data[key].username, volume: data[key].volume})
                }

                setSales(transformedSale)
                setIsLoading(false)
            })
    }, []);

    if (isLoading) {
        return <p>Loading</p>
    }
    if (!sales) {
        return <p>No data yet!</p>
    }

    return (
        <ul>
            {sales?.map(sale => <li key={sale.id}>{sale.username} - {sale.volume} </li>)}
        </ul>
    );
}

export default LastSales;
