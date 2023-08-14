import { Rubik } from "next/font/google";

import "../styles/global.css";
import clsx from "clsx";

const rubik = Rubik({ subsets: ["latin"] });

function App({ Component, pageProps }) {
  return (
    <div className={clsx("bg-slate-200 text-indigo-600", rubik.className)}>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
