import React from 'react'

export const GroceryList = ({item,onDel,id}) => {
  return (
    <div>
        <h2>{item}</h2>
        <button onClick={()=>{onDel(id)}}>Delete</button>
    </div>
  )
}
