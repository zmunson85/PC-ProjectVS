import React, { useContext } from 'react'
import KillList from './components/KillList';
import AddBounty from './components/AddBounty';
import { BountyContext } from './context/bountyContext';

function App() {
  const { killList, addBounty } = useContext(BountyContext);

  return (
    <div>
      <h1>Bounty Hunter 3</h1>
      <AddBounty btnText="Add New Bounty" submit={addBounty} />
      {killList.map(bounty => <KillList key={bounty._id} {...bounty} />)}
    </div>
  )
}

export default App
