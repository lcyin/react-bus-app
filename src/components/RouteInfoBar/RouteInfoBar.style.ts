import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--white);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;

  .route-info-mins {
    text-align: center;
  }

  .route-info-mins h1 {
    color: var(--lightBlue);
  }

  @media screen and (max-width: 768px) {
    .route-info-route {
      padding-right: 20px;
    }

    h1 {
      font-size: var(--fontMed);
    }

    p {
      font-size: var(--fontSmall);
    }
  }
`;
