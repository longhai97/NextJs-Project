import * as React from 'react';
import {useEffect, useState} from "react";
import useSWR from "swr"

type Props = {};
type ISales = {
    id: string
    username: string
    volume: number | string
}
const LastSales = (props: Props) => {
    const [sales, setSales] = useState<ISales[]>();
    // const [isLoading, setIsLoading] = useState(false);

    const {
        data,
        error
    } = useSWR('https://nextjs-course-b0a08-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json', (url) => fetch(url).then(res => res.json()))

    useEffect(() => {
        if (data) {
            const transformedSales = []
            for (const key in data) {
                transformedSales.push({id: key, username: data[key].username, volume: data[key].volume})
            }
            setSales(transformedSales)
        }
    }, [data]);

    if (error) {
        return <p>No data yet!</p>
    }

    if (!data || !sales) {
        return <p>Loading...</p>
    }
    return (
        <ul>
            {sales?.map(sale => <li key={sale.id}>{sale.username} - {sale.volume} </li>)}
        </ul>
    );
}

export default LastSales;
