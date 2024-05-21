import { PlusCircle } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './App.module.css'
import { EmptyList } from './components/EmptyList'
import { Header } from './components/Header'
import { TaskCounter } from './components/TaskCounter'
import { Task, SingleTaskType } from './components/Task'

function App() {
  
  const [tasks, setTasks] = useState<SingleTaskType[]>([])

  const [totalTasks, setTotalTasks] = useState(tasks.length)
  const [completedTasks, setCompletedTasks] = useState(tasks.filter(task => task.isCompleted).length)

  const [newTask, setNewTask] = useState<string>('')

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault()
    setTasks(state => [{id: uuidv4(), title: newTask, isCompleted: false},...state])
    setTotalTasks(tasks.length + 1)
    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }
  
  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('A descrição da tarefa é obrigatória')
  }

  function handleCompleteTask(taskId: string, completedStatus: boolean) {
    const updatedCompletedTaskList = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: completedStatus }
      } else {
        return task
      }
    })

    setCompletedTasks(updatedCompletedTaskList.filter(task => task.isCompleted).length)
    setTasks(updatedCompletedTaskList)
  }

  function handleDeleteTask(taskToDelete: SingleTaskType) {
    const filteredTaskListWithoutDeletedOne = tasks.filter(task => task.id !== taskToDelete.id)
    setTasks(filteredTaskListWithoutDeletedOne)
    setTotalTasks(filteredTaskListWithoutDeletedOne.length)
  }
  return (
    <div>
      <Header />
      <main>
        <div className={styles.wrapper}>
          <form onSubmit={handleAddNewTask}>
            <input type="text" placeholder='Adicione uma nova tarefa' value={newTask} onChange={handleNewTaskChange} onInvalid={handleNewTaskInvalid} required/>
            <button type='submit'>
              Criar
              <PlusCircle size={18} weight='bold' />
            </button>
          </form>
          <div>
            <div className={styles.counterConteiner}>
              <TaskCounter title='Tarefas criadas' numberOfTasks={totalTasks.toString()}/>
              <TaskCounter title='Concluídas' numberOfTasks={`${completedTasks} de ${totalTasks}`} />
            </div>
            {
              totalTasks === 0 ? 
                <EmptyList /> :
                <div className={styles.taskList}>
                  {tasks.map(task => {
                    return (
                      <Task key={task.id} task={task} onCompleteTask={handleCompleteTask} onDeleteTask={handleDeleteTask} />
                    )
                  })}
                </div>
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
