import React, { Component } from "react";

class Header extends Component {
    render(){
        return <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">
                Emaily
              </a>
              <ul class="right">
                <li>
                  <a href="/auth/google">Login With Google</a>
                </li>
              </ul>
            </div>
          </nav>;
    }
}

export default Header;

