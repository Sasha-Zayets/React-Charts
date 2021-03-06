import React from "react";
import propTypes from "prop-types";
import ReactApexChart from "react-apexcharts";

const Chart = ({ settings, type, categories, data, ...attr }) => {
  const options = {
    ...settings,
    xaxis: {
      categories
    }
  };

  return (
    <ReactApexChart options={options} series={data} type={type} {...attr} />
  );
};

Chart.propTypes = {
  settings: propTypes.object,
  type: propTypes.string,
  categories: propTypes.array,
  data: propTypes.array
};

Chart.defaultProps = {
  settings: {},
  type: "line",
  categories: [],
  data: []
};
export default Chart;
