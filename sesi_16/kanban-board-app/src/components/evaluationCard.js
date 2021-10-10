import { useSelector, useDispatch } from 'react-redux'

function EvaluationCard(){
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleEvaluation = (idx) => {
    dispatch({
      type: "DONE_STATUS",
      payload: idx
    })
  }

  const handleBackToProgress = (idx) => {
    dispatch({
      type: "EVALUATION_TO_PROGRESS",
      payload: idx
    })
  }

  return(
    <div className="box">
        <div className="box-title">
          Evaluation
        </div>
        {
          state.evaluation.length >= 1 ? 
          state.evaluation.map((task, idx) => (
            <>
            <div className="card">
            <div className="card-body" key={idx}>
              <p className="card-name">{task}</p>
              <button type="button" className="btn btn-danger btn-sm mt-3" value={idx} onClick={(e) => handleBackToProgress(e.target.value)}>Prev</button>
              <button type="button" className="btn btn-secondary btn-sm mt-3" value={idx} onClick={(e) => handleEvaluation(e.target.value)}>Done</button>
            </div>

            
            </div>
            </>
          )) : <></>
        }
    </div>
  )
}

export default EvaluationCard