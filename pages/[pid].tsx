import * as React from 'react';
import path from "path";
import fs from "fs/promises";

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

export async function getStaticProps(context: any) {
    const {params} = context;

    const productId = params.pid

    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());

    const product = data.products.find((product: { id: string }) => product.id === productId)
    return {
        props: {
            loadedProduct: product
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            {params: {pid: 'p1'}},
        ],
        fallback: true
    }
}

export default ProductDetailPage
