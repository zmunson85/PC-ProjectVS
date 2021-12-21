import React, { useState, useEffect } from "react"
import axios from "axios"


import Bounty from './components/Bounty.js'
import BountyForm from "./components/BountyForm.js"
import "./App.css"


const App = () => {
  const [bounties, setBounties] = useState([])


  useEffect(() => {
    getBounties()
  }, [])

  const getBounties = () => {
    axios.get("/bounties")
      .then(res => setBounties(res.data))
      .catch(err => console.log(err.response.data.errMsg))

  }


  const addBounty = (newBounty) => {
    axios.post("/bounties", newBounty)
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data])
        console.log(bounties)
      })
      .catch(err => console.log(err))
  }


  const deleteBounty = (bountyId) => {
    axios.delete(`./bounties/${bountyId}`,)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err))
  }

  const handleFilter = (e) => {
    if (e.target.value === "reset") {
      getBounties()
    }
    axios.get(`/bounties/search/type?type=${e.target.value}`)
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }


  const editBounty = (updates, bountyId) => {
    axios.put(`/bounties/${bountyId}`, updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }






  return (

    <>

      <div className="headerBounty">
        <h1>Bounty Hunter With MongoDB</h1>
      </div>


      <div className="bountyContainer">
        <BountyForm
          submit={addBounty}
          btnText="Add Bounty" />

        <h4>Filter by Type</h4>
        <select onChange={handleFilter} className="filter">
          <option value="reset">All Bounties</option>
          <option value="Jedi">Jedi</option>
          <option value="Sith">Sith</option>
          <option value="Nomad">Nomad</option>

        </select>



      </div>
      <div className="bounties">
        {bounties.map(bounty =>
          <Bounty
            {...bounty}
            key={bounty._id}
            btnText="edit"
            editBounty={editBounty}
            deleteBounty={deleteBounty} />
        )}

      </div>
    </>
  )

}
export default App;