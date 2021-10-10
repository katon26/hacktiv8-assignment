import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    backlog: [],
    progress: [],
    evaluation: [],
    done: []
}

const createTask = (state = initialState, action) => {
    switch(action.type){
        case "DO_TASK":
            state.backlog.push(action.payload)
            return { 
                backlog: state.backlog,
                progress: state.progress,
                evaluation: state.evaluation,
                done: state.done
            }
        case "PROGRESS_STATUS":
            let tempProgress = state.backlog[action.payload]
            state.backlog.splice(action.payload, 1)
            state.progress.push(tempProgress)
            return { 
                backlog: state.backlog,
                progress: state.progress,
                evaluation: state.evaluation,
                done: state.done
            }
        case "EVALUATION_STATUS":
            let tempEvaluation = state.progress[action.payload]
            state.progress.splice(action.payload, 1)
            state.evaluation.push(tempEvaluation)
            return { 
                backlog: state.backlog,
                progress: state.progress,
                evaluation: state.evaluation,
                done: state.done
            }
        case "DONE_STATUS":
            let tempDone = state.evaluation[action.payload]
            state.evaluation.splice(action.payload, 1)
            state.done.push(tempDone)
            return { 
                backlog: state.backlog,
                progress: state.progress,
                evaluation: state.evaluation,
                done: state.done
            }
    
        case "PROGRESS_TO_BACKLOG":
            let tempBackToBacklog = state.progress[action.payload]
            state.progress.splice(action.payload, 1)
            state.backlog.push(tempBackToBacklog)
            return { 
                backlog: state.backlog,
                progress: state.progress,
                evaluation: state.evaluation,
                done: state.done
            }

        case "EVALUATION_TO_PROGRESS":
            let tempBackToProgress = state.evaluation[action.payload]
            state.evaluation.splice(action.payload, 1)
            state.progress.push(tempBackToProgress)
            return { 
                backlog: state.backlog,
                progress: state.progress,
                evaluation: state.evaluation,
                done: state.done
            }

        default:
            return state
    }
}

const store = createStore(createTask, applyMiddleware(thunk))

export default store