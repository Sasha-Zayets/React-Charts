import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import HomeLink from "../../components/HomeLink/HomeLink";
import Chart from "../../components/Chart/Chart";
import { options } from "./optionsChart";
import { getUserData } from "../../store/actions";
import "./gender-chart.css";

const GenderChart = ({ userCategory, userData, getUserData }) => {
  return (
    <>
      <div className="chart-bars">
        <Chart
          type="bar"
          settings={options}
          data={userData}
          categories={userCategory}
          className="chart-bar"
        />
        <button className="generate-button" onClick={getUserData}>
          Generate data
        </button>
        <HomeLink />
      </div>
    </>
  );
};

GenderChart.propTypes = {
  userCategory: propTypes.array,
  userData: propTypes.array,
  getUserData: propTypes.func
};

GenderChart.defaultProps = {
  userCategory: [],
  userData: []
};

const mapStateToProps = state => ({
  userCategory: state.userCategory,
  userData: state.userData
});

const mapDispatchToProps = dispatch => ({
  getUserData: () => dispatch(getUserData())
});

export default connect(mapStateToProps, mapDispatchToProps)(GenderChart);
