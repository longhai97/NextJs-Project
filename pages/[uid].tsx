import * as React from 'react';

type Props = {
    id: string | number
};
const UserIdPage = (props: Props) => {
    return (
        <h1>
            {props.id}
        </h1>
    );
}

export default UserIdPage;

export async function getServerSideProps(context: any) {
    const {params} = context
    console.log('PARAMS__',params);
    const userId = params.uid
    return {
        props: {
            id: `userid-${userId}`
        }
    }
}
