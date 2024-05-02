'use client'

import { useInView } from "react-intersection-observer";
import React, { useState, useEffect } from 'react';
import { Octokit } from 'octokit';
import 'src/styles/GitHubStats.css'
import forkLogo from 'src/assets/fork.png'
import prLogo from 'src/assets/PR.svg'
import starLogo from 'src/assets/star.png'

function GitHubStats() {
    const octokit = new Octokit({})

    async function fetchRepoData() {
        try {
            const response = await octokit.request('GET /repos/unifyai/ivy', {
                owner: 'unifyai',
                repo: 'ivy',
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                },
            })
            return response.data;
        } catch (error) {
            return {
                "stargazers_count": 14012,
                "forks_count": 5868,
            };
        }
    }

    async function fetchContributorsData() {
        try {
            const response = await octokit.request('GET /repos/unifyai/ivy/contributors?per_page=1&anon=true', {
                owner: 'unifyai',
                repo: 'ivy',
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                },
            })
            // can potentially parse the num contributors from the link, something like this:
            // response.headers["link"] :
            // <https://api.github.com/repositories/330914717/contributors?per_page=1&anon=true&owner=unifyai&repo=ivy&page=2>; rel="next",
            // <https://api.github.com/repositories/330914717/contributors?per_page=1&anon=true&owner=unifyai&repo=ivy&page=1471>; rel="last"
            return response.data;
        } catch (error) {
            return {
                "stargazers_count": 14012,
                "forks_count": 5868,
            };
        }
    }

    const [stars, setStars] = useState(14012);
    const [forks, setForks] = useState(5868);
    const contributors = 1402;

    // convert to formatted strings
    const starsString = stars.toLocaleString();
    const forksString = forks.toLocaleString();
    const contributorsString = contributors.toLocaleString();

    useEffect(() => {
        const data = fetchRepoData();
        data.then((data) => {
            setStars(data["stargazers_count"]);
            setForks(data["forks_count"]);
        });
    }, []);

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const typedClass1 = inView ? 'typed1' : 'hidden';
    const typedClass2 = inView ? 'typed2' : 'hidden';
    const typedClass3 = inView ? 'typed3' : 'hidden';

    // hardcoded contributors for the moment
    return (
        <div className="github-stats">
            <div className="gh-stat">
                <img src={starLogo.src} className="gh-star" alt="GitHub Star" />
                <div className="stat-container">
                    <h2 className={`gh-stat-title ${typedClass1}`} ref={ref}>{starsString} <span className="normal-weight">GitHub Stars</span></h2>
                </div>
            </div>
            <div className="gh-stat">
                <img src={forkLogo.src} className="gh-fork" alt="GitHub Fork" />
                <div className="stat-container">
                    <h2 className={`gh-stat-title ${typedClass2}`}>{forksString} <span className="normal-weight">GitHub Forks</span></h2>
                </div>
            </div>
            <div className="gh-stat">
                <img src={prLogo.src} className="gh-pr" alt="GitHub PR" />
                <div className="stat-container">
                    <h2 className={`gh-stat-title ${typedClass3}`}>{contributorsString} <span className="normal-weight">Contributors</span></h2>
                </div>
            </div>
        </div>
    );
}

export default GitHubStats;
