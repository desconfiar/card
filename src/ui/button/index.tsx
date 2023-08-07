import { FC, ReactNode } from 'react'

import styles from './styles.module.scss'

interface ButtonProps {
    children: ReactNode
    className?: string
    onClick?: () => void
}

const Button: FC<ButtonProps> = ({ children, className, onClick }) => {
    return (
        <button className={`${styles.button} ${className ? className : ''}`} onClick={onClick}>
            <span>{children}</span>
        </button>
    )
}

export default Button
