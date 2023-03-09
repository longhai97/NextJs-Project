import React, {useEffect, useState} from "react";
import useSWR from "swr"

type ISales = {
    id: string
    username: string
    volume: number | string
}

interface AllProps {
    props: React.ReactNode[],
    sales: ISales[]
}

const LastSalesPage = (props: AllProps) => {
    const [sales, setSales] = useState<ISales[]>(props.sales);
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

    if (!data && !sales) {
        return <p>Loading...</p>
    }

    return (
        <ul>
            {sales?.map(sale =>
                <li key={sale.id}>
                    {sale.username} - {sale.volume}
                </li>)}
        </ul>
    );
}

export async function getStaticProps() {
    const response = await fetch('https://nextjs-course-b0a08-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json')
    const data = await response.json();
    const transformedSale = [];

    for (const key in data) {
        transformedSale.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume
        })
    }

    return {props: {sales: transformedSale}}
}

export default LastSalesPage;
