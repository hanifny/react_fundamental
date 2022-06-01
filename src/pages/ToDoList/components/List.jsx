import styles from './List.module.css'

export default function List({todo}) {
    return <div className={`${styles.todo} ${todo.completed || styles.completed}`}>{todo.title}</div>
}