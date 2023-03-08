import * as React from 'react';

type Props = {
    userName: string
};

const UserProfilePage = (props: Props) => {
    return (
        <div>
            <h1 style={{color: 'black'}}> {props.userName} </h1>
        </div>
    );
};

export default UserProfilePage;

export async function getServerSideProps(context: any) {
    const {params, req, res} = context
    console.log('Server side code')
    return {
        props: {
            userName: 'Max'
        }
    };
}
