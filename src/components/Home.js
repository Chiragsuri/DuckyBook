// import React, { useContext, useEffect } from "react";
// import noteContext from "../context/Notes/noteContext";

// const Home = () => {
//   return <div>This is Home</div>;
// };

// export default Home;

import React from "react";
import styles from "./Home.module.css";
import Loader from "./Loader";

const Home = (props) => {
  Loader(props.setProgress);
  return (
    <div className={styles.body}>
      <div
        className={`${styles.coverContainer} cover-container d-flex w-100 h-100 p-3 mx-auto flex-column`}
      >
        <body className="d-flex text-center text-white bg-dark">
          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header className="mb-auto">
              <div>
                <h3 className="float-md-left mb-0">Ducky Book</h3>
              </div>
            </header>
            <main className="px-3">
              <h1>Ducky Book</h1>
              <p className="lead">
                Welcome to Ducky Book! <br /> Jump right in and explore your
                custom created notes <br /> Feel free to share your experience
              </p>
            </main>

            <footer className="mt-auto text-white-50">
              <p>&copy; 2023</p>
            </footer>
          </div>
        </body>
      </div>
    </div>
  );
};

export default Home;
