import * as React from 'react';
import MainHeader from "@/components/layout/MainHeader";

type Props = {
    children?: React.ReactElement[]
};

const Layout = ({children}: Props) => {
    return (
        <>
            <MainHeader/>
            <main>{children}</main>
        </>
    );
}

export default Layout;
