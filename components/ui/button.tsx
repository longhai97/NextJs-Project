import * as React from 'react';
import Link from "next/link";

import classes from './button.module.css'

type Props = {
    link?: string
    children: React.ReactNode
    onClick?: () => void
};

const Button = (props: Props) => {
    if (props.link) {
        return (
            <Link href={props.link} className={classes.btn}>
                {props.children}
            </Link>
        );
    }
    return <button className={classes.btn} onClick={props.onClick}>{props.children}</button>

}

export default Button;
