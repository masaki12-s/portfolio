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
                goal: "iDecoを始める",
                achieved: false
            },
            {
                goal: "医療保険入る",
                achieved: false
            },
            {
                goal: "ふるさと納税する",
                achieved: false
            },
            {
                goal: "胸筋をムキムキにする",
                achieved: false
            },
            {
                goal: "腹筋を割る",
                achieved: false
            },
            {
                goal: "本を読む（敗者のゲーム）",
                achieved: false
            },
            {
                goal: "noteを書く",
                achieved: false
            },
            {
                goal: "noteを書く",
                achieved: false
            },
            {
                goal: "歯医者行く（検診）",
                achieved: false
            },
            {
                goal: "ホワイトニングする",
                achieved: false
            },
            {
                goal: "美容医療なんかやる (脱毛かな)",
                achieved: false
            },
            {
                goal: "女装する",
                achieved: false
            }
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
            {
                goal: "外部登壇する",
                achieved: false
            },
            {
                goal: "テックブログを書く",
                achieved: false
            }
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
                    <h3>{goal.year}年: 計{goal.common.goals.length + goal.engineering.goals.length}個 (達成率: {Math.floor((goal.common.goals.filter((goal: Goal) => goal.achieved).length + goal.engineering.goals.filter((goal: Goal) => goal.achieved).length) / (goal.common.goals.length + goal.engineering.goals.length) * 100)}%)</h3>
                    <h4>一般的な目標: 計{goal.common.goals.length}個 (達成率: {Math.floor(goal.common.goals.filter((goal: Goal) => goal.achieved).length / goal.common.goals.length * 100)}%)</h4>
                    {goal.common.goals.map((commonGoal: Goal) => (
                        <div className="item" key={commonGoal.goal}>
                            <input
                                type="checkbox"
                                checked={commonGoal.achieved}
                            />
                            <span>{commonGoal.goal}</span>
                        </div>
                    ))}
                    <h4>エンジニアリング目標: 計{goal.engineering.goals.length}個 (達成率: {Math.floor(goal.engineering.goals.filter((goal: Goal) => goal.achieved).length / goal.engineering.goals.length * 100)}%)</h4>
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