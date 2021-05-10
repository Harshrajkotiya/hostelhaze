import React from 'react';
import OffCanvas from "../UI/OffCanvas";
import LoginRegContent from './LoginRegContent'

const LoginRegister = (props) => {
    return (
        <OffCanvas type="cog">
            <LoginRegContent {...props}/>
        </OffCanvas>
    );
};

export default LoginRegister;