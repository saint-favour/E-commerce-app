
import styled from "styled-components";
import brandLogo from "../assets/logo.svg";

import CartList from "./cartButton";
import Menu from "./hambugerMenu";


export default function Header() {
  return (
    <>
    <Menu/>
    <HeaderStyle>
          <nav>
            {/* left side   */}
              <ul className="nav-link">
                <a href="#">
                <img src={brandLogo} alt="brand logo" className="brand-logo" />
                </a>
                <a href="#">
                  <li>Collection</li>
                </a>
                <a href="#">
                  <li>Men</li>
                </a>
                <a href="#">
                  <li>Women</li>
                </a>
                <a href="#">
                  <li>About</li>
                </a>
                <a href="#">
                  <li>Contact</li>
                </a>
              </ul>

            {/* right side */}
              <CartList />
          </nav>
      </HeaderStyle>
      </>
  );
}

const HeaderStyle = styled.header`
  font-family: Kumbh Sans;
  margin-inline: 7rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #cbcdd2;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    list-style: none;
    padding: 1.5rem;
  }

  li:hover {
    border-bottom: 1px solid #ff7d1b;
  }

  a {
    text-decoration: none;
    color: #777779;
  }

  .brand-logo {
    padding-inline-end: 1rem;
  }

  .nav-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    /* gap: 2rem; */
    flex: 0.7;
  }

  

  @media (max-width: 945px) {
    display: none;
  }
`;
