import React from "react";

export default function Item({ 
  itemTitle, 
  handleShift, 
  isFirst, 
  isLast,
  index,
  colIndex,
}) {
    return (
        <div className="item">
            {isFirst ? null : (
              <button className="btn btn-danger" onClick={() => handleShift(index, colIndex, colIndex - 1)}>
                Prev
              </button>
            )}

            <span>{itemTitle}</span>
            
            {isLast ? null : ( 
              <button className="btn btn-secondary" onClick={() => handleShift(index, colIndex, colIndex + 1)}>
                Next
              </button>
            )}
        </div>
    )
}