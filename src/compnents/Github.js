import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GitHub() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const username = process.env.REACT_APP_GITHUB_USERNAME;
    const token = process.env.REACT_APP_GITHUB_TOKEN;

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
                    headers: {
                        Authorization: `token ${token}`,
                    },
                });
                setRepos(response.data);
            } catch (error) {
                console.error(error);
                setError('Failed to fetch repositories');
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [username, token]);

    if (loading) {
        return (
            <section id="github" className="py-20 px-6 bg-gray-900 text-white text-center">
                <h2 className="text-4xl font-bold mb-10">GitHub Repositories</h2>
                <div className="flex justify-center items-center">
                    <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="github" className="py-20 px-6 bg-gray-900 text-white text-center">
                <h2 className="text-4xl font-bold mb-10">GitHub Repositories</h2>
                <p>{error}</p>
            </section>
        );
    }

    return (
        <section id="github" className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-900 text-white">
            <h2 className="text-4xl text-center font-bold mb-10">GitHub Repositories</h2>
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {repos.map((repo) => (
                    <div key={repo.id} className="bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 w-full">
                        <h3 className="text-2xl font-bold mb-2 text-center">{repo.name}</h3>
                        <p className="text-gray-400 mb-4">{repo.description || 'No description available'}</p>
                        <div className="flex justify-between items-center mt-2">
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
