import styled from "styled-components";

export const GridContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const GridContainer__Content = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--color-primary-800);
    padding: 40px;
    gap: 30px;
    border-radius: 8px;
    height: 424px;
    z-index: 10;
    margin: auto;

    @media (min-width: 640px) {
        width: 400px;
    }
`

export const GridContainer__Content__Child = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const GridContainer__Content__ChildSpan = styled.span`
    color: var(--color-primary-100);
    font-size: 1.875rem;
    font-family: Inter-Bold;
    font-weight: 700;
    margin-top: 4px;
`

export const GridContainer__Content__Description = styled.div`
    color: var(--color-primary-100);
    font-family: Inter-Regular;
    line-height: 1.5;
    margin-top: 4px;
`

export const GridContainer__Content__Description__Linker = styled.a`
    color: #fd4d4d;
    cursor: pointer;

    &:hover {
        text-decoration-line: underline;
    }
`

export const GridContainer__ContentWith__Buttons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const GridContainer__Content__Button = styled.button`
    color: #fff;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 18px;
    padding-bottom: 17.5px;
    margin-top: 10px;
    font-size: 1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .5rem;
    background-color: #242c37;
    cursor: pointer;
    line-height: inherit;
    border: none;

    &:hover {
        background-color: #323d4d;
    }
`

export const GridContainer__ForgotPassword__Container = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Inter-Regular;
    color: #fd4d4d;
    cursor: pointer;

    &:hover {
        text-decoration-line: underline;
    }
`