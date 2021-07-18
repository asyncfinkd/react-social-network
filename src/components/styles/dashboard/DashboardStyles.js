import styled, { keyframes } from "styled-components";
const SpinnerAnimation = keyframes`
0% {
    left: -35%;
    right: 100%;
}
60%, 100% {
    left: 100%;
    right: -90%;
}
`;

const SpinnerSecondAnimation = keyframes`
0% {
    left: -200%;
    right: 100%;
}
60%, 100% {
    left: 107%;
    right: -8%;
}
`;
export const AlertContainer__Spinner = styled.div`
  width: 100%;
  height: 4px;
  background-color: #242c37;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;

export const AlertContainer__SpinnerBlur = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  width: 100%;
  border-radius: 0 0 8px 8px;
  height: 419px;
  margin-top: 2px;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const AlertContaner__SpinnerSpan = styled.span`
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 9999;
    bottom: 0px;
    background-color: #fd4d4d;
    animation: 2.1s cubic-bezier(0.65, 0.81, 0.73, 0.4) 0s infinite normal none
      running ${SpinnerAnimation};
  }
  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    background-color: #fd4d4d;
    animation: 2.1s cubic-bezier(0.16, 0.84, 0.44, 1) 1.15s infinite normal none
      running ${SpinnerSecondAnimation};
  }
`;
export const GridContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    height: 100vh;
  }
`;
export const Container__AlertContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Container__AlertContent = styled.div`
  background-color: var(--color-primary-700);
  padding: 40px;
  gap: 10px;
  border-radius: 8px;
  height: 424px;
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const Container__TooltipContainer = styled.div`
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

export const Container__TooltipSpan = styled.span`
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

export const Container__AlertSpan = styled.span`
  color: var(--color-primary-100);
  font-size: 1.5rem;
  font-family: Inter-Bold;
  text-transform: capitalize;
  font-weight: 700;
  margin-top: 4px;
  letter-spacing: 0.5px;
`;

export const Container__AlertSpanChild = styled.span`
  color: gray;
  font-size: 1rem;
  font-family: Inter-Regular;
  letter-spacing: 0.5px;
`;

export const Container__Alert__BirthdaySpan = styled.span`
  color: gray;
  font-family: Inter-Regular;
  font-size: 13px;
`;

export const Container__Alert__BirthdayContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const Container__AlertBirthday__SelectContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-top: 8px;
  gap: 10px;
`;

export const Container__AlertBirthday__Select = styled.select`
  border-radius: 4px;
  color: #ccd0d5;
  font-family: Inter-Regular;
  font-size: 15px;
  font-weight: normal;
  height: 36px;
  line-height: 20px;
  padding: 0 8px;
  border: none;
  outline: none;
  appearance: none;
  width: 125px;
  background-color: transparent;
  border: 1px solid #ccd0d5;
  background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Yrq8Y9PlN02.png");
  background-position: right 5px center;
  background-repeat: no-repeat;
  background-size: 14px;
  padding-right: 20px;

  &::focus,
  &:active {
    outline: none;
  }
`;

export const Container__AlertGender__Span = styled.span`
  border: 1px solid #ccd0d5;
  display: inline-block;
  flex: 1 0 auto;
  font-weight: normal;
  height: 36px;
  padding: 0;
  position: relative;
  width: auto;
  border-radius: 4px;
  text-align: left;
`;

export const Container__AlertGender__SpanLabel = styled.label`
  color: #1c1e21;
  display: inline-block;
  font-family: Inter-Regular;
  font-size: 12px;
  line-height: 36px;
  padding: 0 28px 0 10px;
  width: 100%;
  color: #ccd0d5;
  font-weight: normal;
  vertical-align: middle;
  text-align: left;
`;

export const Container__AlertGender__SpanInput = styled.input`
  height: 36px;
  margin: 0;
  position: absolute;
  right: 10px;
  top: 0;
  font-size: 12px;
  background-color: #fff;
  color: #1c1e21;
  font-weight: normal;
  text-align: left;
  outline: none;
`;

export const Container__AlertButton = styled.button`
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

export const IndexDashboard__Container = styled.div`
  pointer-events: none;
  flex: 1 1 0%;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  border: 0px solid black;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  z-index: 0;
`;

export const IndexDashboard__Content = styled.div`
  min-height: 1260px;
  flex-direction: row;
  display: flex;
  flex-basis: auto;
  flex-shrink: 0;
  margin: 0px;
  align-items: stretch;
  pointer-events: auto;
  border: 0px solid black;
  padding: 0px;
  min-width: 0px;
  position: relative;
  width: 100%;
`;

export const IndexDashboard__Header = styled.header`
  flex-grow: 1;
  align-items: flex-end;
  z-index: 3;
  user-select: none;
  border: 0px solid black;
  flex-basis: auto;
  flex-shrink: 0;
  flex-direction: column;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  display: flex;
`;

export const IndexDashboard__HeaderContent = styled.div`
  width: 275px;
  border: 0px solid black;
  align-items: stretch;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
`;

export const Dashboard__HeaderFirstContainer = styled.div`
  height: 100%;
  backface-visibility: hidden;
  top: 0px;
  position: fixed;
  display: flex;
  align-items: stretch;
  flex-basis: auto;
  flex-shrink: 0;
  flex-direction: column;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
`;

export const Dashboard__HeaderFirstContainerContent = styled.div`
  overflow-y: auto;
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 275px;
  padding-left: 12px;
  padding-right: 12px;
  align-items: stretch;
  border: 0px solid black;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  flex-direction: column;
  flex-basis: auto;
  position: relative;
`;

export const Dashboard__HeaderFirstContainerContentFirst = styled.div`
  display: flex;
  align-items: flex-start;
  border: 0px solid black;
  display: flex;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  flex-direction: column;
  flex-basis: auto;
  position: relative;
`;

export const Dashboard__LogoContainer = styled.div`
  max-width: 100%;
  padding-bottom: 2px;
  padding-top: 2px;
  display: flex;
  align-items: stretch;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  flex-direction: column;
  flex-basis: auto;
  position: relative;
`;

export const Dashboard__LogoContainerH1 = styled.h1`
  min-width: 32px;
  cursor: pointer;
  align-self: stretch;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  border: 0px solid black;
  flex-shrink: 0;
  padding: 0px;
  margin: 0px;
  min-height: 0px;
  flex-basis: auto;
  flex-direction: column;
  position: relative;
`;

export const Dashboard__LogoContainerLink = styled.a`
  background-color: rgba(0, 0, 0, 0);
  outline-style: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  min-width: 48px;
  min-height: 48px;
  cursor: pointer;
  user-select: none;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  border-style: solid;
  border-radius: 9999px;
  display: flex;
  align-items: stretch;
  border: 0px solid black;
  flex-shrink: 0;
  margin: 0px;
  padding: 0px;
  flex-direction: column;
  flex-basis: auto;
  position: relative;
`;

export const Dashboard__LogoContainerLinkContainer = styled.div`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  overflow-wrap: break-word;
  min-width: 0px;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  flex-direction: row;
  text-align: center;
  display: flex;
  border: 0px solid black;
  margin: 0px;
  padding: 0px;
  white-space: pre-wrap;
  cursor: pointer;
  list-style: outside none none;
`;

export const Dashboard__LogoContainerLinkContainerSVG = styled.svg`
  height: 2rem;
  flex-grow: 1;
  user-select: none;
  position: relative;
  max-width: 100%;
  display: inline-block;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  overflow-wrap: break-word;
  text-align: center;
  white-space: pre-wrap;
  cursor: pointer;
`;

export const Dashboard__HeroContainer = styled.div`
  margin-top: 2px;
  margin-bottom: 4px;
  width: 100%;
  display: flex;
  flex-shrink: 0;
  align-items: stretch;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  flex-direction: column;
  flex-basis: auto;
  position: relative;
`;

export const Dashboard__HeroContainer__Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 0px solid black;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  flex-basis: auto;
  position: relative;
`;

export const Dashboard__HeroContainer__NavLink = styled.a`
  display: flex;
  flex-direction: column;
  outline-style: none;
  cursor: pointer;
  align-items: flex-start;
  flex-grow: 1;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  border: 0px solid black;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  flex-basis: auto;
  position: relative;
  list-style: outside none none;
  text-align: inherit;
  color: inherit;
`;

export const Dashboard__HeroContainer__NavLinkContainer = styled.div`
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  max-width: 100%;
  padding: 12px 0px;
  border-radius: 9999px;
  border: 0px solid black;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  flex-basis: auto;
  position: relative;
  cursor: pointer;
  color: inherit;
  list-style: outside none none;
  text-align: inherit;
`;

export const Dashboard__NavLinkContainerContentIcon = styled.div`
  display: flex;
  align-items: stretch;
  border: 0px solid black;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  flex-direction: column;
  flex-basis: auto;
  position: relative;
  cursor: pointer;
  color: inherit;
  text-align: inherit;
  list-style: outside none none;
`;

export const Dashboard__NavLinkContainerContentIconSVG = styled.svg`
  height: 1.75rem;
  user-select: none;
  position: relative;
  color: #dee3ea;
  max-width: 100%;
  display: inline-block;
  fill: currentColor;
  cursor: pointer;
  list-style: outside none none;
  text-align: inherit;
`;

export const DashboardNavLink__ContainerTitles = styled.div`
  margin-right: 16px;
  margin-left: 20px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 700;
  width: 100px;
  overflow-wrap: break-word;
  min-width: 0px;
  color: #dee3ea;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 0px solid black;
  display: inline;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
  list-style: outside none none;
  text-align: inherit;
`;

export const DashboardNavLink__ContainerTitlesSPAN = styled.span`
  font-family: Inter-Regular;
  overflow-wrap: break-word;
  color: inherit;
  white-space: inherit;
  border: 0px solid black;
  display: inline;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
  position: relative;
  top: 2px;
  left: 10px;
  text-align: center;
  list-style: outside none none;
`;

export const TweetButton = styled.div`
  width: 90%;
  margin-top: 16px;
  margin-bottom: 16px;
  border: 0px solid black;
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  flex-direction: column;
  background-color: transparent;
  flex-basis: auto;
  position: relative;
`;

export const TweetButtonLink = styled.a`
  background-color: #fd4d4d;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 28px;
  outline-style: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  min-width: 48px;
  min-height: 48px;
  cursor: pointer;
  user-select: none;
  padding-left: 32px;
  padding-right: 32px;
  border-color: rgba(0, 0, 0, 0);
  border-width: 1px;
  border-style: solid;
  border-radius: 9999px;
  display: flex;
  align-items: stretch;
  border: 0px solid black;
  flex-shrink: 0;
  margin: 0px;
  padding: 0px;
  flex-direction: column;
  flex-basis: auto;
  position: relative;
  color: inherit;
  list-style: outside none none;
  text-align: inherit;
  text-decoration: none;
`;

export const TweetButtonLink__Container = styled.div`
  color: rgb(255, 255, 255);
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  overflow-wrap: break-word;
  min-width: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  flex-direction: row;
  text-align: center;
  border: 0px solid black;
  margin: 0px;
  padding: 0px;
  white-space: pre-wrap;
  cursor: pointer;
  list-style: outside none none;
`;

export const TweetButtonLink__ContainerSPAN = styled.span`
  font-family: Inter-Regular;
  font-size: 15px;
  line-height: 20px;
  overflow-wrap: break-word;
  min-width: 0px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: inherit;
  border: 0px solid black;
  display: inline;
  margin: 0px;
  padding: 0px;
  text-align: center;
  cursor: pointer;
  list-style: outside none none;
`;

export const TweetButtonLink__Content = styled.div`
  display: inline-flex;
  align-items: stretch;
  border: 0px solid black;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  flex-direction: column;
  position: relative;
  font-size: 15px;
  line-height: 20px;
  overflow-wrap: break-word;
  white-space: nowrap;
  color: inherit;
  text-align: center;
  cursor: pointer;
  list-style: outside none none;
`;

export const TweetButtonLink__ContentSPAN = styled.span`
  font-family: Inter-Regular;
  overflow-wrap: break-word;
  min-width: 0px;
  color: inherit;
  white-space: inherit;
  border: 0px solid black;
  display: inline;
  margin: 0px;
  padding: 0px;
  text-align: center;
  cursor: pointer;
  list-style: outside none none;
`;

export const TweetButtonLink__ContentSPANChild = styled.span`
  font-family: inherit;
  overflow-wrap: break-break-word;
  color: inherit;
  white-space: inherit;
  border: 0px solid black;
  display: inline;
  margin: 0px;
  padding: 0px;
  text-align: center;
  cursor: pointer;
  list-style: outside none none;
`;

export const Dashboard__HeaderSecondContainer = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  display: flex;
  border: 0px solid black;
  align-items: stretch;
  flex-shrink: 0;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  flex-direction: column;
  flex-basis: auto;
  position: relative;
`;

export const Dashboard__HeaderSecondContent = styled.div`
  display: flex;
  align-items: stretch;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  border: 0px solid black;
  min-width: 0px;
  padding: 0px;
  flex-direction: column;
  flex-basis: auto;
  position: relative;
`;

export const Dashboard__HeaderSecondContentContainer = styled.div`
  outline-style: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 12px;
  border-radius: 9999px;
  border: 0px solid black;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  flex-basis: auto;
  position: relative;
`;
