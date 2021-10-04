import React from 'react';
import Nav from '../Nav/Nav';

const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="jumbotron bg-primary text-light p-3">
                    <h1 className="p-3">Little Quin Kinder Garden School</h1>                  
                </div> 
                <Nav></Nav>
            </div>
            
        </div>
    );
};

export default Header;