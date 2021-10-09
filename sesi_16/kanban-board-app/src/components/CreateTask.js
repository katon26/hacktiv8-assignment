import { useDispatch } from 'react-redux'

function CreateTask(){
  const dispatch = useDispatch()

  const doTask = () => {
    let taskValue = document.getElementById('task')
    if(taskValue.value === ''){
      alert("Name cannot be blank")
      taskValue.focus()
    }else{
      dispatch({
        type: "DO_TASK",
        payload: taskValue.value
      })
    }
    taskValue.value = ''
  }

  return(
    <div className="row">
      <div className="col-md-4">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="New Task" id="task"/>
          <button className="btn btn-primary" type="button" id="btn-task" onClick={doTask} >Create task</button>
        </div>
      </div>
    </div>
  )
}

export default CreateTask