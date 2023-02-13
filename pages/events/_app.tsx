import * as React from 'react';

type Props = {
    Component: typeof React.Component
    pageProps: React.ComponentProps<any>
};

const MyApp = ({Component, pageProps}: Props) => {
    return (
        <Component {...pageProps}/>
    );
}

export default MyApp;
