import React from 'react'

const Feature = ({stat}) => {
  return (
    <div className='stat'>
        <div className="stat-name">{stat?.stat?.name}</div>
        <div className="bse">{stat?.base_stat}</div>
    </div>
  )
}

export default Feature
