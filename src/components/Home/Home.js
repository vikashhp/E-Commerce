import { Fragment } from "react";
import Navbars from "../Navbar/Navbars";
import classes from "./Home.module.css";
import Table1 from "./Table";
const Home = () => {
  return (
    <Fragment>
      <div className={classes.genric}>
        <h1>The Genric</h1>
        <div className={classes.box}>
          <h2>Get Our Latest Album</h2>
        </div>
      </div>
      <h2 style={{ textAlign: "center" }}>Tours</h2>

      <Table1 />
    </Fragment>
  );
};

export default Home;
