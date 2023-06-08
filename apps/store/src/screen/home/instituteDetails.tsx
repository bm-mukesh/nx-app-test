/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useState } from 'react';

interface EditInstProps {
    institute: any;
}

const InstituteDetails: React.FC<EditInstProps> = ({ institute }) => {
    const [inst, setCount] = useState(institute);
    useEffect(() => {
        // Do something when inst changes
        // console.log("INST -----", institute.registeredDetails.name);
    }, []);

    return (
        <div>
            {institute ? <>
                <p> <small>instituteName:</small> {institute.instituteName} </p>
                <p><small>instituteDomain:</small> {institute.instituteDomain} </p>
                <p><small>isActive:</small> {institute.isActive} </p>
                <p><small>isInhouse:</small> {institute.isInhouse} </p>
                <p><small>logo:</small> {institute.logo} </p>
                <hr />
                {/* <p><small>name:</small> {institute.registeredDetails.name} </p>
                <p><small>email:</small> {institute.registeredDetails.email} </p>
                <p><small>phone:</small> {institute.registeredDetails.phone} </p>
                <p><small>username:</small> {institute.registeredDetails.userName} </p> */}
                {/* <button onClick={() => setCount({ num: 1 })}>Increment</button> */}
            </> : "Single Institute data not found"}
        </div>
    )
}
export default InstituteDetails