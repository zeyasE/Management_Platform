import React, { Component } from "react";
import "./menu.css";

class Menu extends Component {
  state = {
    sidemenu: false,
  };
  sidetag = () => {
    const newsidemenu = !this.state.sidemenu;
    this.setState({
      sidemenu: newsidemenu,
    });
  };
  render() {
    let statesidemenu;
    if (this.state.sidemenu === true) {
      statesidemenu = document.getElementById("sidebar").style.width = "250px";
      // document.getElementById("main").style.marginLeft = "250px";
    } else {
      statesidemenu = document.getElementById("sidebar").style.width = "50px";
      // document.getElementById("main").style.marginLeft = "50px";
    }
    return (
      <div id="sidebar" className="sidebar">
        <button className="openbtn" onclick={this.sidetag}>
          ☰ Open Sidebar
        </button>
        <a
          href="javascript:void(0)"
          className="closebtn"
          onclick={this.sidetag}
        >
          x
        </a>
        <a href="#">All Project</a>
        <a href="#">Profile</a>
        <a href="#">Command</a>
        <a href="#">Output</a>
      </div>
      {statesidemenu};
      // <div id="main">#main {
      //   transition: marjin-left 0.5s;
      //   padding: 16px;
      // }</div> (move text when open)
    );
  }
}

export default Menu;
