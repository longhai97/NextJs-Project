import classes from './errorAlert.module.css';
import React from "react";

type Props = {
    children: React.ReactNode
}

function ErrorAlert(props: Props) {
    return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
