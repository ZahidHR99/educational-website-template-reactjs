import React from 'react';

const Footer = () => {
    return ( 
            <div className="container">
                <div className="jumbotron bg-dark text-light p-3">
                    <div className="row">
                        <div className="col-sm-4">
                            <h5 className="text-warning">About Us</h5>
                            <p>
                            Ideally, kindergarten will be a smooth, sunny introduction to real school for your child, since it sets the stage for the rest of his education. While no program is perfect, some are better than others.
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <ul>
                                <ol className="text-warning">Link</ol>
                                <ol>Home</ol>
                                <ol>About</ol>
                                <ol>Students</ol>
                                <ol>Subjects</ol>
                                <ol>Contact</ol>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <ul>
                                <ol className="text-warning">Others</ol>
                                <ol>Support</ol>
                                <ol>Privacy</ol>
                                <ol>Contact</ol>
                                <ol>Help</ol>
                            </ul>
                        </div>
                    </div>  
                    <hr/>
                    <p>© Copyright Little Quin Kinder Garden School . All Rights Reserved </p>            
                </div> 
                
            </div>
       
    );
};

export default Footer;