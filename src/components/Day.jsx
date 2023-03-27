import styles from './Day.module.scss'

import Goal from "./Goal"

function Day({id, day, goals}) {
  return (
    <div key={id} className={styles.container}>
      <div className={styles.title}>
        <h2>{day}</h2>
        <div className={styles.underline} />
      </div>
      <div className={styles.goals}>
          {goals.map(goal => (
            <Goal goal={goal} />
          ))}
        </div>
      </div>
    )
}

export default Day