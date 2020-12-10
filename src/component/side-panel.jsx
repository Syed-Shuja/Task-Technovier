import React from "react";

class SidePanel extends React.Component {
    togglesidebar = () => {

    }
  render() {
    return (
      <div className="side-panel">
          <div className="logo">
              <a href="#"> <img src="" alt="logo"/> </a>
              <div className="toggle-btn" onClick="togglesidebar()">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </div>
        <div class="dropdown">
          <a
            class="btn drop btn-light dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown link
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SidePanel;
