import React from 'react';

export default function Stacks() {
    return (
        <div>
            <h2>技術スタック</h2>
            <table style={{ width: '100%', marginLeft: 10/20 }}>
                <tbody>
                <th>Programming Language</th>
                    <tr>
                        Python
                    </tr>
                    <tr>
                        Go
                    </tr>
                <th>Infrastracture</th>
                    <tr>
                        AWS (ECS, S3, CloudFront, IAM, SSM, etc...)
                    </tr>
                    <tr>
                        GCP (CloudRun, CloudStorage, BigQuery, etc...)
                    </tr>

                <th>Tools</th>
                    <tr>
                        Terraform
                    </tr>
                    <tr>
                        Ansible
                        Docker
                        CI/CD (GitHub Actions, CircleCI)
                    </tr>
                </tbody>
            </table>
        </div>
    );
}