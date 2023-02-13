import * as React from 'react';
import Link from "next/link";

import classes from './MainHeader.module.css'

const MainHeader: React.FC = () => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <div className={classes.logo}>
                    <Link href={'/'}>NextEvents</Link>
                </div>
                <nav className={classes.navigation}>
                    <ul>
                        <li>
                            <Link href={'/events'}>Browse All Events</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    );
}

export default MainHeader;
