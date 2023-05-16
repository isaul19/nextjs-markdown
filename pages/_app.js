import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-400 text-base font-medium">
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
