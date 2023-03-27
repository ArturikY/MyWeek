import Day from "./Day"

import WeekData from "./Week.data"


function Week() {
  return (
    <div>
      <h1>My Week</h1>
      <div className="days-container">
        {WeekData.map(Day => {
          <Day id={Day.id} day={Day.day} goals={Day.goals} />
        })}
      </div>
    </div>
  )
}

export default Week