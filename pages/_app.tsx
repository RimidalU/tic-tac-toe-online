import { Rubik } from "next/font/google";

import "../styles/global.css";

const rubik = Rubik({ subsets: ["latin"] });

function App({ Component, pageProps }) {
  return (
    <div className={rubik.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
