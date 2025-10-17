import React from 'react'

const Read = (props) => {
    const list = props.list;
    const setList = props.setList;
    const renderList = list.map((val,idx)=>{
        return <li key={idx}>{val}</li>
    })
  return (
    <>
    <ol>{renderList}</ol>
    </>
  )
}

export default Read