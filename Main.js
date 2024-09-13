import React from 'react'

const Main = () => {
    return (
        <div>
            <section id="home">
                <h1>Welcome to CareerConnect</h1>
                <p>Connecting graduates to career opportunities</p>
            </section>
            <section id="jobs">
                <h2>Job Listings</h2>
                <ul>
                    <li>
                        <h3>Job Title</h3>
                        <p>Company Name</p>
                        <p>Location</p>
                        <p>Job Description</p>
                        <button aria-label="Apply Now">Apply Now</button>
                    </li>
                </ul>
            </section>
            <section id="internships">
                <h2>Internship Opportunities</h2>
                <ul>
                    <li>
                        <h3>Internship Title</h3>
                        <p>Company Name</p>
                        <p>Location</p>
                        <p>Internship Description</p>
                        <button aria-label="Apply Now">Apply Now</button>
                    </li>
                </ul>
            </section>
            <section id="mentorship">
                <h2>Mentorship Program</h2>
                <p>Get paired with industry professionals for guidance</p>
            </section>
            <section id="resources">
                <h2>Career Resources</h2>
                <ul>
                    <li>
                        <h3>Resource Title</h3>
                        <p>Resource Description</p>
                        <button aria-label="Download Now">Download Now</button>
                    </li>
                </ul>
            </section>
            </div>
    );
};
export default Main;
