import '../style/Goals.css';

interface Goal {
    goal: string;
}

interface Common extends Goal { }
interface Enginnering extends Goal { }

interface GoalsEachYear {
    year: string;
    common: Common[];
    engineering: Enginnering[];
}

const year_2025: GoalsEachYear = {
    year: "2025",
    common: [
        {
            goal: "英語の勉強を継続する"
        },
    ],
    engineering: [
    ]
}

const goals: GoalsEachYear[] = [
    year_2025
]


export default function Goals() {
    return (
        <div>
            <h2>目標</h2>
            {goals.map((goal) => (
                <div key={goal.year}>
                    <h3>{goal.year}</h3>
                    <h4>一般的な目標</h4>
                    {goal.common.map((common) => (
                        <div className="item" key={common.goal}>
                            <input
                                type="checkbox"
                            />
                            <span>{common.goal}</span>
                        </div>
                    ))}
                    <h4>エンジニアリング</h4>
                    {goal.engineering.map((engineering) => (
                        <div className="item" key={engineering.goal}>
                            <input
                                type="checkbox"
                            />
                            <span>{engineering.goal}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}