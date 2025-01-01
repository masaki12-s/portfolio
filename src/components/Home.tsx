import '../style/Home.css';
import Stacks from './Stacks';
import Outputs from './Outputs';

export default function Home() {
    const contents: JSX.Element[] = [
        <Stacks />,
        <Outputs />
    ];
    return (
        <div>
            <h1>Masaki Sanada</h1>
            Portal to my projects
            {contents.map((contents) => (
                <div className="Home-content">{contents}</div>
            ))}
        </div>
    );
}
