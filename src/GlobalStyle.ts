import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* ----------- CSS variable -------------- */
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --lightRed: #DC2E4B;
        --medRed: #C0213B;
        --darkRed: #7A1526;
        --lightBlue: #51A5E1;
        --medBlue: #1B679D;
        --darkBlue: #0D324D;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    * {
        box-sizing: border-box;
        font-family: "Abel", sans-serif;
    }

    body {
        margin: 0;
        padding: 0;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            /* ------- Grab css variable ------------- */
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
        }
    }
`;
