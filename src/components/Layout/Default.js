import React from "react";
import "./default.css";
import { connect } from 'react-redux';
import { getUserData, getCommentsData } from "../../store/actions";
import Router from "../../router";

class Default extends React.Component {
  componentDidMount() {
    const { getUserData, generateData } = this.props;

    getUserData();
    generateData();
  }

  render () {
    return (
      <>
        <header className="header">
          <div className="logo">
            <img
              src="https://image.flaticon.com/icons/svg/2257/2257295.svg"
              alt=""
            />
          </div>
        </header>
        <main>
          <Router />
        </main>
        <footer className="footer">developer: Sasha Zayets</footer>
      </>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  getUserData: () => dispatch(getUserData()),
  generateData: () => dispatch(getCommentsData())
});

export default connect(null, mapDispatchToProps)(Default);
