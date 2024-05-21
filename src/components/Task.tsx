import { Trash, Check } from '@phosphor-icons/react'
import styles from './Task.module.css'

export interface SingleTaskType {
    id: string
    title: string
    isCompleted?: boolean
}

interface TaskProps {
    task: SingleTaskType
    onCompleteTask: (taskId: string, isCompleted: boolean) => void
    onDeleteTask: (task: SingleTaskType) => void
}

export function Task({ task, onCompleteTask, onDeleteTask }:TaskProps) {

    function handleDeleteTask() {
        onDeleteTask(task)
    }
    function handleCompleteTask() {
        onCompleteTask(task.id, !task.isCompleted )
    }
    return (
        <div className={styles.task}>
            <div>
                <button className={ task.isCompleted ? styles.buttomCheckActive : styles.buttomCheck} onClick={handleCompleteTask}>
                    { task.isCompleted ? <Check  size={10} weight='bold'/> : null }
                </button>
            </div>
            <p className={ task.isCompleted ? styles.strikeThrough : ''}>{task.title}</p>
            <div>
                <button className={styles.buttomTrash} onClick={handleDeleteTask}>
                <Trash size={16} />
                </button>
            </div>
        </div>
    )
}