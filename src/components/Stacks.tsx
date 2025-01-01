import '../style/Stacks.css';
interface Stack {
    name: string;
    description: string[];
}

export default function Stacks() {
    const stacks: Stack[] = [
        {
            name: "Programming Language",
            description: ["Python", "Go"]
        },
        {
            name: "Infrastracture",
            description: ["AWS (ECS, S3, CloudFront, IAM, SSM, etc...)", "GCP (CloudRun, CloudStorage, BigQuery, etc...)"]
        },
        {
            name: "Tools",
            description: ["Terraform", "Ansible", "Docker", "CI/CD (GitHub Actions, CircleCI)"]
        }
    ];

    return (
        <div className="Stacks">
            <h2> 技術スタック </h2>
            <div className="Stacks-list">
                {stacks.map((stack) => (
                    <div key={stack.name}>
                        <h3> {stack.name} </h3>
                        <ul>
                            {stack.description.map((description) => (
                                <li key={description}> {description} </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
