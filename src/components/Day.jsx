import styles from './Day.module.scss'

import Goal from "./Goal" 

function Day() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Monday</h2>
        <div className={styles.underline} />
      </div>
      <div className={styles.goals}>
          <Goal />
          <Goal />
          <Goal />
          <Goal />
          <Goal />
          <Goal />
        </div>
      </div>
    )
}

export default Day