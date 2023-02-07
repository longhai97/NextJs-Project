// @flow
import * as React from 'react';
import {useRouter} from 'next/router'

const PortfolioProjectPage = () => {
    const router = useRouter();

    console.log('PATH_NAME', router.pathname);
    console.log('QUERY_', router.query);

    return (
        <div>
            <h1>The Portfolio Project Page</h1>
        </div>
    );
}

export default PortfolioProjectPage
