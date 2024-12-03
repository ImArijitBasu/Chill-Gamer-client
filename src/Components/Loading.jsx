import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Loading = () => {
    const {loading} = useContext(AuthContext);
    if(!loading) return null;
    return (
        <div>
            loading..............
        </div>
    );
};

export default Loading;