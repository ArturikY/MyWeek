import { goalsMonday } from './JSON/goalsMonday.data'
import { goalsThuesday } from './JSON/goalsThuesday.data';
import { goalsWendsday } from './JSON/goalsWendsday.data'
import { goalsThursday } from './JSON/goalsThursday.data';
import { goalsFriday } from './JSON/goalsFriday.data'
import { goalsSaturday } from './JSON/goalsSaturday.data';

const allDays = [goalsMonday, goalsThuesday, goalsWendsday, goalsThursday, goalsFriday, goalsSaturday];

const WeekData = [
    {
        id: 1,
        day: 'Monday',
        goals: goalsMonday
    },
    {
        id: 2,
        day: 'Thuesday',
        goals: goalsThuesday
    },
    {
        id: 3,
        day: 'Wendsday',
        goals: goalsWendsday
    },
    {
        id: 4,
        day: 'Thursday',
        goals: goalsThursday
    },
    {
        id: 5,
        day: 'Friday',
        goals: goalsFriday
    },
    {
        id: 6,
        day: 'Saturday',
        goals: goalsSaturday
    },
];

export default WeekData