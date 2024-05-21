import logo from '../assets/Logo.svg'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="Logotipo da aplicacao todo" />
        </header>
    )
}