import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { getCommentsData } from "../../store/actions";
import Chart from "../../components/Chart/Chart";
import HomeLink from "../../components/HomeLink/HomeLink";
import { settings } from "./settingsChart";
import "./chart.css";

const ChartComments = ({ data, categories, generateData }) => {
  return (
    <>
      <Chart
        settings={settings}
        categories={categories}
        data={data}
        className="chart-comments"
      />
      <button className="generate-button" onClick={generateData}>
        Generate data
      </button>
      <div className="back-block">
        <HomeLink />
      </div>
    </>
  );
};

ChartComments.propTypes = {
  data: propTypes.array,
  categories: propTypes.array
};

ChartComments.defaultProps = {
  data: [],
  categories: []
};

const mapStateToProps = state => ({
  data: state.commentsData,
  categories: state.commentsCategories
});

const mapDispatchToProps = dispatch => ({
  generateData: () => dispatch(getCommentsData())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartComments);
