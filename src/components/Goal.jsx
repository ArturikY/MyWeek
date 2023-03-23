import styles from './Day.module.scss'

function Goal() {
    return (
        <div className={styles.goal}>
          <div className="dot"></div>
            <b className="title_goal">Learning TypeScrpit</b>
            <div className="content_goal">RED Group course</div>
            <div className="time_goal">1 hours</div>
        </div>
    )
}

export default Goal