import React from 'react';

const Header = () => {
    return (
        <div>
        <header>
            <nav>
                <ul>
                    <li><a href="#home" aria-label="Home">Home</a></li>
                    <li><a href="#jobs" aria-label="Job Listings">Job Listings</a></li>
                    <li><a href="#internships" aria-label="Internship Opportunities">Internship Opportunities</a></li>
                    <li><a href="#mentorship" aria-label="Mentorship Program">Mentorship Program</a></li>
                    <li><a href="#resources" aria-label="Career Resources">Career Resources</a></li>
                </ul>
            </nav>
        </header>
        </div>
    );
};

export default Header;