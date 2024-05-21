import styles from './TaskCounter.module.css'

interface TaskCounter {
    title: 'Tarefas criadas' | 'Concluídas'
    numberOfTasks: string
}


export function TaskCounter({ title = 'Tarefas criadas', numberOfTasks = '0' }: TaskCounter) {
    return (
        <div className={styles.counter}>
            <strong>{title}</strong>
            <span>{numberOfTasks}</span>
        </div>
    )
}