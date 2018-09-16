import * as React from 'react';
import './Logo.scss';
import logo from './logo.svg';

class Logo extends React.Component {
    public render() {
        return (
            <img src={logo} className="logo" alt="logo" />
        )
    }
}

export default Logo;