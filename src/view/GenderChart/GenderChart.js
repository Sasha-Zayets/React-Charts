import React from "react";
import { connect } from "react-redux";
import HomeLink from "../../components/HomeLink/HomeLink";
import Chart from "../../components/Chart/Chart";
import { options } from "./optionsChart";
import { getUserData } from "../../store/actions";
import "./gender-chart.css";

class GenderChart extends React.Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    const { userCategory, userData } = this.props;

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
          <HomeLink />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  userCategory: state.userCategory,
  userData: state.userData
});

const mapDispatchToProps = dispatch => ({
  getUserData: () => dispatch(getUserData())
});

export default connect(mapStateToProps, mapDispatchToProps)(GenderChart);
