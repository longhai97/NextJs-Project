import * as React from 'react';
import path from "path";
import fs from "fs/promises";
import {Simulate} from "react-dom/test-utils";
import {useRouter} from "next/router";

type Props = {
    loadedProduct: any
};

const ProductDetailPage = (props: Props) => {
    const {loadedProduct} = props

    return (
        <>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </>
    );
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());

    return data
}


export async function getStaticProps(context: any) {
    const {params} = context;

    const productId = params.pid

    const data = await getData()
    const product = data.products.find((product: { id: string }) => product.id === productId)
    if (!product) {
        return {notFound: true  }
    }

    return {
        props: {
            loadedProduct: product
        }
    }
}

export async function getStaticPaths() {
    const data = await getData()
    const ids = data.products.map((product: { id: any }) => product.id)
    const pathWithParams = ids.map((id: any) => ({params: {pid: id}}))
    return {
        paths: pathWithParams,
        fallback: false
    }
}

export default ProductDetailPage
