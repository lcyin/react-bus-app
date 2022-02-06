import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content } from "./Header.styles";
type Props = {
  title:string;
}

const Header: React.FC<Props> = ({title}) => {
  return (
    <Wrapper  >
      <Content>
        {title}
      </Content>
    </Wrapper>
  );
};

export default Header;
