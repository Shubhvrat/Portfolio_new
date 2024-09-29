import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GitHub() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const username = process.env.REACT_APP_GITHUB_USERNAME;
    const token = process.env.REACT_APP_GITHUB_TOKEN;

    useEffect(() => {
     
        axios
            .get(`https://api.github.com/users/${username}/repos`, {
                headers: {
                    Authorization: `token ${token}`,
                },
            })
            .then((response) => {
                setRepos(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [username, token]);

    if (loading) {
        return (
            <section id="github" className="py-20 px-6 bg-gray-900 text-white text-center">
                <h2 className="text-4xl font-bold mb-10">GitHub Repositories</h2>
                <p>Loading repositories...</p>
            </section>
        );
    }

    return (
        <section id="github" className="py-20 px-6 bg-gray-900 text-white">
            <h2 className="text-4xl text-center font-bold mb-10">GitHub Repositories</h2>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {repos.map((repo) => (
                    <div key={repo.id} className="bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                        <h3 className="text-2xl font-bold mb-2">{repo.name}</h3>
                        <p className="text-gray-400 mb-4">{repo.description || 'No description available'}</p>
                        <div className="flex justify-between items-center">
                            <a
                                href={repo.html_url}
                                className="text-indigo-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Repository
                            </a>
                            <span className="text-gray-400 text-sm">{repo.language || 'N/A'}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default GitHub;
