import '../style/Goals.css';

interface Goal {
    goal: string[];
}

interface Common extends Goal { }
interface Enginnering extends Goal { }

interface GoalsEachYear {
    year: string;
    common: Common;
    engineering: Enginnering;
}

const year_2025: GoalsEachYear = {
    year: "2025",
    common: {
        goal: [
            "英語を使ってコミュニケーションを取る",
            "読書をする",
            "筋トレを継続する"
        ]
    },
    engineering: {
        goal: [
            "Go言語のプロジェクトを作る",
            "AWSの認定資格を取得する",
            "CI/CDの仕組みを理解する"
        ]
    }
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
                    {goal.common.goal.map((commonGoal: string) => (
                        <div className="item" key={commonGoal}>
                            <input
                                type="checkbox"
                            />
                            <span>{commonGoal}</span>
                        </div>
                    ))}
                    <h4>エンジニアリング</h4>
                    {goal.engineering.goal.map((engineeringGoal: string) => (
                        <div className="item" key={engineeringGoal}>
                            <input
                                type="checkbox"
                            />
                            <span>{engineeringGoal}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}