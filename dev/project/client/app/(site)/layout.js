const metadata = {
    title: 'Next.js Tutorial',
    description: 'A Next.js tutorial using the App Router',
};

async function SiteLayout({ children }) {
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    );
}

export default SiteLayout;
