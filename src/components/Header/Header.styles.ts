import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--medRed);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  color: var(--white);

  a {
    color: var(--white);
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    font-size: var(--fontSmall);
    justify-content: center;
  }
`;
