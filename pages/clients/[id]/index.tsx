// @flow
import * as React from 'react';
import {useRouter} from "next/router";

const ClientsProjectsPage = () => {
    const router = useRouter();
    console.log(router.query);

    const loadProjectHandler = () => {
        //load data...
        // router.push('/clients/max/projectA').then(r => console.log(r))
        router.push({
            pathname: '/clients/[eventId]/[clientprojectsid]',
            query: {id: router.query?.id, clientprojectsid: 'projectA'}
        }).then(r => console.log(r))
    }
    return (
        <div>
            <h1>The Projects of a Given Clients</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
};

export default ClientsProjectsPage
