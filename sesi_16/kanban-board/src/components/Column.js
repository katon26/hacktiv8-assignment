import React from "react";
import Item from './Item';

export default function Column({    
    data,
    handleInputChange,
    index,
    handleAddTodo,
    handleShift,
    isFirst,
    isLast,
}) {

    return (
      <>
        <div className="col">
           <div className="card">
             <div className="card-body">
                { data.todos.map((v, i) => (
                    <Item 
                        key={i}
                        itemTitle={v}
                        isFirst={isFirst}
                        isLast={isLast}
                        handleShift={handleShift}
                        index={i}
                        colIndex={index}
                    />
                ))}
                <input
                  onChange = {(e) => handleInputChange(e.target.value, index)}
                  value = {data.input}
                  placeholder = 'Create new to do'
                />
                <button className="btn btn-primary" onClick={() => handleAddTodo(index)}>Add todo</button>
             </div>
           </div>
        </div>
      </>
    )
}