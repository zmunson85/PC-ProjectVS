import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BountyContext = React.createContext();

function KillListProvider(props) {
    const [killList, setKillList] = useState([]);


    //get all bounties/killList
    const getBounties = () => {
        axios.get('/bounties')
            .then(res => res.json())
            .then(res => {
                setKillList(res)
            })
            .catch(err => console.error(err.message))

    }

    const addBounty = (newBounty) => {
        axios.post('/bounties', newBounty)
            .then(res => setKillList(prevBounties => [...prevBounties, res.data]))
    };
    const deleteBounty = (_id) => {
        axios.delete(`/bounties/${_id}`)
            .then(res => {
                setKillList(prevBounties => prevBounties.filter(bounty => bounty._id !== _id))
            })
            .catch(err => console.error(err.message))
    };

    const editBounty = (update, id) => {
        axios.put(`/bounties/${id}`, update)
            .then(res => {
                setKillList(prevBounties => prevBounties.map(bounty => bounty._id !== id ? bounty : res.data))
            })
            .catch(res => console.log(res))
    }
    useEffect(() => {
        getBounties();
    }, [])

    return (

        <BountyContext.Provider value={{ killList, addBounty, deleteBounty, editBounty }}>
            {props.children}
        </BountyContext.Provider>

    )
}

export { KillListProvider, BountyContext }
