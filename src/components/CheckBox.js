import React, {useState} from 'react';

const CheckBox = ({label, name, id, htmlFor}) => {
    const[check, setCheck] = useState(false);

    return (
        <>
            <input
                type={"checkbox"}
                className={"custom-checkbox"}
                id={id}
                name={name}
                onClick={()=> setCheck(!check)}/>
            <label htmlFor={htmlFor} style={{width: "100%"}}>
                {label}
            </label>
        </>
    );
};

export default CheckBox;