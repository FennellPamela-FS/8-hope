import { use } from "react";

export default function SiteLayout({ children }) {
    const data = use(getData());    // fetch the data in the layout component

    return (
        <div>
            <header>
                {/* conditionally render the ProfileDropdown component based on the data.user property */}
                {data && data.user ? <ProfileDropdown /> : null}
            </header>

            <main>
                {children}
            </main>
        </div>
    );
}

function getData() {
    return fetch('/api/data').then(res => res.json());
}
