import '../style/Goals.css';

interface Goal {
    goal: string;
    achieved: boolean;
}

interface Common {
    goals: Goal[];
}

interface Enginnering {
    goals: Goal[];
}

interface GoalsEachYear {
    year: string;
    common: Common;
    engineering: Enginnering;
}

const year_2025: GoalsEachYear = {
    year: "2025",
    common: {
        goals: [
            {
                goal: "英語の勉強を続ける",
                achieved: false
            },
            {
                goal: "読書を続ける",
                achieved: false
            },
        ]
    },
    engineering: {
        goals: [
            {
                goal: "DBの本読む",
                achieved: false
            },
            {
                goal: "APMからDBクエリのチューニングをする",
                achieved: false
            },
        ]
    }
}

const goals_each_year: GoalsEachYear[] = [
    year_2025
]


export default function Goals() {
    return (
        <div>
            <h2>目標</h2>
            {goals_each_year.map((goal: GoalsEachYear) => (
                <div key={goal.year}>
                    <h3>{goal.year}</h3>
                    <h4>一般的な目標: 計{goal.common.goals.length}個</h4>
                    {goal.common.goals.map((commonGoal: Goal) => (
                        <div className="item" key={commonGoal.goal}>
                            <input
                                type="checkbox"
                                checked={commonGoal.achieved}
                            />
                            <span>{commonGoal.goal}</span>
                        </div>
                    ))}
                    <h4>エンジニアリング目標: 計{goal.engineering.goals.length}個</h4>
                    {goal.engineering.goals.map((engineeringGoal: Goal) => (
                        <div className="item" key={engineeringGoal.goal}>
                            <input
                                type="checkbox"
                                checked={engineeringGoal.achieved}
                            />
                            <span>{engineeringGoal.goal}</span>
                        </div>
                    ))}
                </div>
            ))
            }
        </div>
    );
}