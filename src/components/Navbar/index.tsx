import React, { useContext } from "react";
import { Link } from "react-router-dom";

import HomeLogo from '../../images/home.svg'
import SaveLogo from '../../images/star.svg'
import SearchLogo from '../../images/search.svg'
import { Content, HomeImg, SaveImg, SearchImg, Wrapper } from "./Navbar.style";

const NavBar = () => (
    <Wrapper>
        <Content>
            <Link to="/home">
            <HomeImg src={HomeLogo} alt="home-logo" />
            </Link>
            <Link to="/save">
            <SaveImg src={SaveLogo} alt="save-logo" />
            </Link>
            <Link to="/search">
            <SearchImg src={SearchLogo} alt="search-logo" />
            </Link>
        </Content>

    </Wrapper>
)

export default NavBar