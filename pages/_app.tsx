import { Rubik } from "next/font/google";
import clsx from "clsx";

import "../styles/global.css";

const rubik = Rubik({ subsets: ["latin"] });

function App({ Component, pageProps }) {
  return (
    <div
      className={clsx(
        "bg-slate-200 text-indigo-600 min-w-fit",
        rubik.className,
      )}
    >
      <Component {...pageProps} />
      <div id="modals" />
    </div>
  );
}

export default App;
