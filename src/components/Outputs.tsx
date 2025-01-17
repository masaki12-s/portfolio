import '../style/Outputs.css';
interface BlogPost {
    title: string;
    url: string;
}

interface BlogSection {
    company: string;
    years: {
        year: string;
        posts: BlogPost[];
    }[];
}

interface NotePost {
    title: string;
    url: string;
}

export default function Outputs() {
    const blogData: BlogSection[] = [
        {
            company: "ヤプリ",
            years: [
                {
                    year: "2024年",
                    posts: [
                        {
                            title: "新卒SREが挑む！New RelicでYappli Data Hubの監視を劇的強化した話",
                            url: "https://tech.yappli.io/entry/newrelic_yappli_data_hub"
                        },
                        {
                            title: "「ヤプリ新卒SREの オンボーディング」という題で登壇しました #Yappli Tech Conference 2024",
                            url: "https://tech.yappli.io/entry/2024/yapplitechconf2024-sre-onboarding"
                        },
                        {
                            title: "ヤプリのテックブログ投稿をGitHubを利用してできるようにしました",
                            url: "https://tech.yappli.io/entry/yappli-tech-blog-github-management"
                        }
                    ]
                },
                {
                    year: "2023年",
                    posts: [
                        {
                            title: "ヤプリのSREインターンでSentryのインフラ改善に取り組みました",
                            url: "https://tech.yappli.io/entry/sre-intern-sentry-replace"
                        }
                    ]
                }
            ]
        },
        {
            company: "リクルート",
            years: [
                {
                    year: "2023年",
                    posts: [
                        {
                            title: "【 RECRUIT Job for Student 2022 Autumn】Kubecostの検証をしてみました",
                            url: "https://blog.studysapuri.jp/entry/kubecost-investigation"
                        }
                    ]
                }
            ]
        }
    ];

    const noteData: NotePost[] = [
        {
            title: "中学生に知ってほしい(奈良)高専について",
            url: "https://note.com/rururu657/n/nf94a2a7a7905"
        },
    ];

    return (
        <div>
            <h2>TechBlog</h2>
            <div className="tech-blog">
                {blogData.map(section => (
                    <section key={section.company}>
                        <h3>{section.company}</h3>
                        {section.years.map(yearGroup => (
                            <div key={yearGroup.year}>
                                <h4>{yearGroup.year}</h4>
                                <ul>
                                    <div className="blog-post">
                                        {yearGroup.posts.map(post => (
                                            <li key={post.url}>
                                                <a href={post.url}>{post.title}</a>
                                            </li>
                                        ))}
                                    </div>
                                </ul>
                            </div>
                        ))}
                    </section>
                ))}
            </div>
            <div style={{ height: "20px" }}></div>
            <h2>note</h2>
            <div className="note">
                {noteData.map(post => (
                    <li key={post.url}>
                        <a href={post.url}>{post.title}</a>
                    </li>
                ))}
            </div>
        </div>
    );
}