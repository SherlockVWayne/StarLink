import React, {Component} from 'react';
import starlinkLogo from '/Users/shelwayne/Desktop/project_04/starlink/src/assests/images/Starlink_Logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={starlinkLogo} className="App-logo" alt="logo" />
                <p className="title">
                    StarLink Tracker
                </p>
            </header>
        );
    }
}
export default Header;