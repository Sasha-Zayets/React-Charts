import React from "react";
import { connect } from 'react-redux';
import { getCommentsData } from '../../store/actions';
import Chart from "../../components/Chart/Chart";
import HomeLink from '../../components/HomeLink/HomeLink';
import { settings } from "./settingsChart";
import "./chart.css";

class ChartComments extends React.Component {
  componentDidMount() {
    this.props.generateData();
  }  

  render() {
    const { data, categories, generateData } = this.props;

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
  }
}

const mapStateToProps = (state) => ({
  data: state.commentsData,
  categories: state.commentsCategories
});

const mapDispatchToProps = (dispatch) => ({
  generateData: () => dispatch(getCommentsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartComments);
