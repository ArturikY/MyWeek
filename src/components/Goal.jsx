import styles from './Goal.module.scss'

function Goal({goal}) {
  return (
    <div key={goal.id} className={styles.goal}>
      <input type="checkbox" className={styles.checkbox} />
      <b className={styles.title}>{goal.title}</b>
      <div className={styles.description}>{goal.description}</div>
      <div className={styles.time}>{goal.time}</div>
    </div>
    )
}

export default Goal