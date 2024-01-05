import styled from 'styled-components';

export const Header = styled.header`
    height: 70px;
    display: flex;
    margin: 0 16px;
    align-items: center;
    justify-content: space-between;

    h2 {
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    nav {
        gap: 8px;
        display: flex;
        align-items: center;

        a {
            transition: all .7s;
        }

        a:hover {
            border-bottom: 2px solid #1b84e6;
        }

        a.active {
            color: #FFF;
            border-bottom: 2px solid #1b84e6;
        }
    }

    .hamburger {
        display: none;
    }

    @media(max-width: 648px){
        nav {
            display: none;
        }

        .hamburger {
            display: flex;
        }
    }
`