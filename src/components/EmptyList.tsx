import Clipboard from '../assets/Clipboard.svg'
import styles from './EmptyList.module.css'


export function EmptyList() {
    return (
        <div className={styles.listContainer}>
            <img src={Clipboard} alt="" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}