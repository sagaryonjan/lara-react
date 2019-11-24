import React, { useEffect, useState } from 'react';
import Bus from './../Bus';


export const Flash = () => {
  
    let [visibility, setVisibility] = useState(false);
    let [message, setMessage] = useState('');
    let [type, setType] = useState('');

    useEffect(() => {
        Bus.addListener('flash', ({message, type}) => {
            setVisibility(true);
            setMessage(message);
            setType(type);
            setTimeout(() => {
                setVisibility(false);
            }, 4000);
        });
                

    }, []);

    return (
        visibility && <div className={'alert alert-'+type} role="alert">
  			{message}
		</div>
    )
}