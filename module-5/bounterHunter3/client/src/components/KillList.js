import React, { useState, useContext } from 'react'
import { BountyContext } from '../context/bountyContext';
import AddBounty from './AddBounty'


function KillList(props) {
    const { firstName, lastName, living, bountyAmount, type, _id } = props
    const [edit, setEdit] = useState(false);
    const { editBounty, deleteBounty } = useContext(BountyContext);

    return (
        <ul>
            {!edit ?
                <>
                    <h1>KILL LIST</h1>
                    <li>
                        <h1>{`${firstName}, ${lastName}`}</h1>
                        <p>Living: {living}</p>
                        <p>Bounty: {bountyAmount}</p>
                        <p>Type: {type}</p>
                        <button onClick={() => deleteBounty(_id)}>Delete Bounty</button>
                        <button onClick={() => setEdit(prevEdit => !prevEdit)}>Update</button>
                    </li>
                </>
                :
                <>
                    <AddBounty
                        firstName={firstName}
                        lastName={lastName}
                        alive={living}
                        _id={_id}
                        bountyAmount={bountyAmount}
                        type={type}
                        submit={editBounty}
                    />

                    <button onClick={() => setEdit(prevEdit => !prevEdit)}
                    >Confirm</button>
                </>
            }
        </ul>
    )
}


export default KillList




