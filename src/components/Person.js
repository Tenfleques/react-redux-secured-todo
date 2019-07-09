import React from 'react';

const Person = (props) =>{
    return (
        <div className="col-12 col-md-6 col-lg-4 my-2">
            <div className="bg-info card mb-3 pb-3 h-100">
                <div className="card-body">
                    <h4>              
                        {props.person.name}
                    </h4>
                    <em className="small">
                        Role: {props.person.role}
                    </em>
                </div>
            </div>
        </div>
    )
}    


export default Person;