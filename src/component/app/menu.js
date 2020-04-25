import React, { Component } from "react";
import "./menu.css";

class Menu extends Component {
  state = {
    data: false,
    open: "250px",
    close: "100px",
  };
  sidetag = () => {
    const newdata = !this.state.data;
    this.setState({
      data: newdata,
    });
  };
  render() {
    // let statesidemenu;
    // if (this.state.sidemenu === true) {
    // statesidemenu = document.getElementById("sidebar").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
    // } else {
    // statesidemenu = document.getElementById("sidebar").style.width = "50px";
    // document.getElementById("main").style.marginLeft = "50px";
    // }
    return (
      <div
        className="sidebar"
        style={{ width: this.state.data ? this.state.close : this.state.open }}
      >
        <button className="openbtn" onClick={this.sidetag}>
          ☰ Open Sidebar
        </button>
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={this.sidetag}
        >
          <div>
            <a>{this.state.data ? this.state.cloase : this.state.open}</a>
          </div>
        </a>
        <a href="#">All Project</a>
        <a href="#">Profile</a>
        <a href="#">Command</a>
        <a href="#">Output</a>
      </div>
      // <div id="main">#main {
      //   transition: marjin-left 0.5s;
      //   padding: 16px;
      // }</div> (move text when open)
    );
  }
}

export default Menu;
