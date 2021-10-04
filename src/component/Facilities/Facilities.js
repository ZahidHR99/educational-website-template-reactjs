import React from 'react';
import Card from '../Home/Card';
import { useState, useEffect } from 'react';

const Facilities = () => {
    //set state
    const [card, setCard] = useState([]);

    //set effect
    useEffect(() => {
        fetch('./facilities.json')
            .then(res=>res.json())
            .then(data=>setCard(data));
    }, []);

    return (
        <div>
            <div className="container mt-2 mb-2">
                <h2 className="p-2 mt-2 mb-2"><b>Our Facilities</b></h2>
                <div className="row">
                    {
                        card.map(student=><Card 
                            key={student.key}
                            student={student}
                        ></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Facilities;