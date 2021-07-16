import styled from "styled-components";

export const GridContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    height: 100vh;
  }
`;

export const GridContainer__Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary-800);
  padding: 40px;
  gap: 30px;
  border-radius: 8px;
  height: 424px;
  width: 100%;
  z-index: 10;
  margin: auto;

  @media (min-width: 640px) {
    width: 400px;
  }
`;

export const GridContainer__Content__Child = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const GridContainer__Content__ChildSpan = styled.span`
  color: var(--color-primary-100);
  font-size: 1.875rem;
  font-family: Inter-Bold;
  font-weight: 700;
  margin-top: 4px;
`;

export const GridContainer__Content__Description = styled.div`
  color: var(--color-primary-100);
  font-family: Inter-Regular;
  line-height: 1.5;
  margin-top: 4px;
`;

export const GridContainer__Content__Description__Linker = styled.a`
  color: #fd4d4d;
  cursor: pointer;

  &:hover {
    text-decoration-line: underline;
  }
`;

export const GridContainer__ContentWith__Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const GridContainer__Content__Button = styled.button`
  color: #fff;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 18px;
  padding-bottom: 17.5px;
  margin-top: 10px;
  font-size: 1rem;
  width: 100%;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background-color: #242c37;
  cursor: pointer;
  line-height: inherit;
  border: none;

  &:hover {
    background-color: #323d4d;
  }
`;

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
`;

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const FooterSVG = styled.div`
  display: flex;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const FooterSVGElement = styled.svg`
  display: block;
  cursor: ${(props) => props.active && "pointer"};
  margin-left: ${(props) => props.active && "10px"};
`;

export const FooterSecond__Container = styled.div`
  display: flex;
  flex-direction: row;
  color: #5d7290;
  gap: 40px;
  align-items: center;
`;

export const FooterSecond__Container__Linker = styled.a`
  color: inherit;
  text-decoration: inherit;
  cursor: pointer;
  font-family: Inter-Regular;
  margin-right: ${(props) => props.active && "10px"};

  &:hover {
    color: #b2bdcd;
  }
`;

export const FooterSecond__Container__ForIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const GridContainer__ContentTitle = styled.h1`
  text-align: center;
  color: ${(props) => (props.active ? "#fd4d4d" : "#dee3ea")};
  font-family: ${(props) => (props.active ? "Inter-Regular" : "Inter-Bold")};
  font-size: ${(props) => (props.active ? "1rem" : "1.875rem")};
  font-weight: 700;
  margin-top: ${(props) => props.active && "1rem"};
  cursor: ${(props) => props.active && "pointer"};
  transition: ${(props) => props.active && "all 0.1s ease"};

  &:hover {
    opacity: ${(props) => props.active && "0.8"};
  }
`;

export const GridContainer__ContentInput = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #242c37;
  background-color: transparent;
  border-radius: 5px;
  padding-left: 10px;
  transition: all 0.1s ease;
  color: #dee3ea;

  &:focus {
    border: 1px solid #fd4d4d;
    box-shadow: 0 0 0 0.12rem rgba(253, 77, 77, 0.6);
  }
`;

export const GridContainer__ContentInputButton = styled.button`
  border: none;
  outline: none;
  background-color: #fd4d4d;
  width: 100%;
  color: #dee3ea;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const GridContainer__ContentInput__Tooltip = styled.div`
  position: absolute;
  right: 0;
  top: -35px;
  background-color: #fd4d4d;
  color: #dee3ea;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    background-color: #fd4d4d;
    width: 10px;
    height: 10px;
    bottom: -3px;
    right: 10px;
    transform: rotate(45deg);
  }
`;

export const GridContainer__ContentInput__Tooltip__Span = styled.span`
  color: #dee3ea;
  font-size: 12px;
  min-height: 15px;
  font-weight: 300;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  background-color: transparent;
  display: flex;
  align-items: center;
`;
