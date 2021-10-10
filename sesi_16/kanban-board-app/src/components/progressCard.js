import { useSelector, useDispatch } from 'react-redux'

function ProgressCard(){
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleProgress = (idx) => {
    dispatch({
      type: "EVALUATION_STATUS",
      payload: idx
    })
  }

  const handleBackToBacklog = (idx) => {
    dispatch({
      type: "PROGRESS_TO_BACKLOG",
      payload: idx
    })
  }

  return(
      <div className="box-task">
        <div className="box-title">
          In Progress
        </div>
        {
          state.progress.length >= 1 ? 
          state.progress.map((task, idx) => (
            <div className="card-item" key={idx}>
              <p className="card-name">{task}</p>
              <button type="button" className="btn btn-danger btn-sm mt-3" value={idx} onClick={(e) => handleBackToBacklog(e.target.value)}>Prev</button>
              <button type="button" className="btn btn-secondary btn-sm mt-3" value={idx} onClick={(e) => handleProgress(e.target.value)}>Evaluate</button>
            </div>
          )) : <></>
        }
      </div>
  )
}

export default ProgressCard