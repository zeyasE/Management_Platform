import React, { Component } from "react";
import "./menu.css";

class Menu extends Component {
  // constructor(props) {
  //   super(props);
  //   this.openNav = this.openNav.bind(this);
  //   this.closeNav = this.closeNav.bind(this);
  // }
  openNav = () => {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };
  closeNav = () => {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };

  render() {
    return (
      <div id="sidebar" className="sidebar">
        <button className="openbtn" onclick={this.openNav.bind(this)}>
          ☰ Open Sidebar
        </button>
        <a
          href="javascript:void(0)"
          className="closebtn"
          onclick={this.closeNav.bind(this)}
        >
          x
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
