import { useState } from 'react'
import { ShowDetails } from './ShowDetails.jsx'
import { ShowList } from './ShowList'

export function Shows() {
  const [show, SetShow] = useState([
    {
      name: 'testing'
    },
    {
      name: 'test2'
    }])
  return (
    <>
      <p>"Testing Shows"</p>
      <div className='tile'>
        {show.map(show => <ShowList show={show} setShow={SetShow} key={show.id}/>)}
      </div>
      {/* <ShowList setShow={SetShow} show={show}/> */}
    </>
  )
}