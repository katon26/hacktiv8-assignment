import { useSelector, useDispatch } from 'react-redux'

function BacklogCard(){
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleTake = (idx) => {
    dispatch({
      type: "PROGRESS_STATUS",
      payload: idx
    })
  }

  return(
    <div className="box-task">
        <div className="box-title">
          Backlog
        </div>
        {
          state.backlog.length >= 1 ? 
          state.backlog.map((task, idx) => (
            <div className="card-item" key={idx}>
              <p className="card-name">{task}</p>
              <button type="button" className="btn btn-secondary btn-sm mt-3" value={idx} onClick={(e) => handleTake(e.target.value)}>Take</button>
            </div>
          )) : <></>
        }
    </div>
  )
}

export default BacklogCard