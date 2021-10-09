import { useSelector } from 'react-redux'

function DoneCard(){
  const state = useSelector((state) => state)

  return(
    <div className="box-task">
        <div className="box-title">
          Done
        </div>
        {
          state.done.length >= 1 ? 
          state.done.map((task, idx) => (
            <div className="card-item" key={idx}>
              <p className="card-name">{task}</p>
              {/* <button type="button" className="btn btn-secondary btn-sm mt-3" value={idx} onClick={(e) => handlePrev(e.target.value)}>Prev</button> */}
            </div>
          )) : <></>
        }
    </div>
  )
}

export default DoneCard