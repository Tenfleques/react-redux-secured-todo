import React from 'react';
import {NavBar} from '../../Components'

export default function Home(props) {
    let user = props.user
    console.log(props.actions)
    return (
        <div>
            <NavBar actions={props.actions}/>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        Welcome {user.name}
                    </div>
                </div>            
            </div>    
        </div>
    );
  }
  