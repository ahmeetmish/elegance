import styled from 'styled-components';

export const Hero = styled.div`
    height: 90vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .content {
        gap: 8px;
        display: flex;
        align-items: center;
        flex-direction: column;

        h3 {
            font-size: 24px;
            font-weight: 300;
            letter-spacing: 2px;
        }

        h2 {
            font-size: 86px;
            font-weight: 700;
            letter-spacing: 4px;
        }

        p {
            font-size: 14px;
            max-width: 57ch;
            line-height: 26px;
            letter-spacing: 1px;
            text-align: center;
        }
    }

    .sidebar {
        right: 16px;
        gap: 4px;
        display: flex;
        position: absolute;
        align-items: center;
        flex-direction: column;

        div {
            width: 36px;
            height: 36px;
            opacity: 0.7;
            display: flex;
            cursor: pointer;
            align-items: center;
            justify-content: center;
            background-color: rgba(224, 224, 224, 0.1);
        }
    }

    .scroll-the-down {
        bottom: 16px;
        opacity: 0.7;
        position: absolute;
        text-align: center;
    }

    @media(max-width: 648px){
        .content {
            h3 {
                font-size: 18px;
            }

            h2 {
                font-size: 72px;
            }

            p {
                font-size: 12px;
            }
        }
    }

    @media(max-width: 556px){
        .sidebar {
            margin-top: 4px;
            position: static;
            flex-direction: row;
        }
    }

    @media(max-width: 440px){
        .content {
            h3 {
                font-size: 14px;
            }

            h2 {
                font-size: 58px;
            }

            p {
                font-size: 10px;
            }
        }
    }
`