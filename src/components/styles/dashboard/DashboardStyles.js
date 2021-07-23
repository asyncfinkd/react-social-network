import styled, { keyframes } from "styled-components/macro";

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
  white-space: pre-wrap;
  cursor: pointer;
  list-style: outside none none;
  padding-left: 12px;
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
  border-radius: 9999px;
  color: inherit;

  &:hover {
    background-color: rgba(253, 77, 77, 0.1);
  }
`;

export const Dashboard__HeroContainer__NavLinkContainer = styled.div`
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  max-width: 100%;
  padding: 12px;
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
  left: 10px;
  text-align: center;
  list-style: outside none none;
`;

export const TweetButton = styled.div`
  width: 100%;
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
  overflow-wrap: break-word;
  color: inherit;
  white-space: inherit;
  border: 0px solid black;
  display: inline;
  margin: 0px;
  padding: 0px;
  text-align: center;
  cursor: pointer;
  list-style: outside none none;
  letter-spacing: 0.5px;
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
  cursor: pointer;

  &:hover {
    background-color: rgba(253, 77, 77, 0.1);
  }
`;

export const Dashboard__HeaderSecontContainerLogo = styled.div`
  display: flex;
  align-items: stretch;
  border: 0px solid black;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  cursor: pointer;
`;

export const Dashboard__HeaderSecontContentLogo = styled.div`
  width: 40px;
  height: 40px;
  outline-style: none;
  /* background-color: rgb(255,255,255); */
  overflow: hidden;
  border-radius: 9999px;
  display: flex;
  align-items: stretch;
  border: 0px solid black;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  cursor: pointer;
`;

export const DashbordHeader__ContainerContent__Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const DashbordHeader__ContainerContent__LogoContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  border: 0px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 0px;
  width: 100%;
  height: 100%;
  min-height: 0px;
  padding: 0px;
  margin: 0px;
  cursor: pointer;
`;

export const IMAGEDashboard__Header = styled.div`
  background-image: url("https://scontent.ftbs2-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=nyKhkR6NhPQAX-jQZM1&_nc_ht=scontent.ftbs2-1.fna&oh=be2e6b35c6c1de53b9af83750ddf81ce&oe=611F51F8");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  right: 0;
  bottom: 0;
  display: flex;
  border: 0px solid black;
  flex-direction: column;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  cursor: pointer;
`;

export const Dashboard__HeaderContainerTitle = styled.div`
  outline-style: none;
  flex-shrink: 1;
  max-width: 100%;
  display: flex;
  align-items: stretch;
  border: 0px solid black;
  flex-basis: 0;
  flex-direction: column;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  cursor: pointer;
`;

export const Dashboard__HeaderContainerTitleContent = styled.div`
  outline-style: none;
  flex-shrink: 1;
  flex-grow: 1;
  max-width: 100%;
  margin-left: 12px;
  margin-right: 12px;
  display: flex;
  align-items: stretch;
  flex-basis: auto;
  flex-direction: column;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  cursor: pointer;
`;

export const Dashboard__HeaderContainerTitleContentFirst = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  max-width: 100%;
  border: 0px solid black;
  flex-basis: auto;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-height: 0px;
  padding: 0px;
  position: relative;
  cursor: pointer;
`;

export const Dashboard__HeaderContainerTitleContentFirstContent = styled.div`
  white-space: nowrap;
  color: #dee3ea;
  font-family: Inter-Regular;
  font-weight: 700;
  font-size: 14px;
  line-height: 15px;
  overflow-wrap: break-word;
  min-width: 0px;
  max-width: 100%;
  text-overflow: ellipsis;
  border: 0px solid black;
  display: inline;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
`;

export const Dashboard__HeaderContainerTitleContentFirstContentSPAN = styled.span`
  overflow-wrap: break-word;
  font-family: inherit;
  color: inherit;
  white-space: inherit;
  border: 0px solid black;
  display: inline;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
`;

export const Dashboard__HeaderContainerTitleContentFirstContentSPANCONTENT = styled.span`
  font-family: inherit;
  overflow-wrap: break-word;
  color: inherit;
  white-space: inherit;
  border: 0px solid black;
  display: inline;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
`;

export const Dashboard__HeaderContainerTitleContentSecond = styled.div`
  flex-shrink: 1;
  display: flex;
  flex-direction: row;
  border: 0px solid black;
  flex-basis: auto;
  align-items: stretch;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  cursor: pointer;
`;

export const Dashboard__HeaderContainerTitleContentSecondContainer = styled.div`
  color: rgb(83, 100, 113);
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  overflow-wrap: break-word;
  min-width: 0;
  max-width: 100%;
  font-family: Inter-Regular;
  white-space: nowrap;
  text-overflow: ellipsis;
  border: 0px solid black;
  display: inline;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const Dashboard__HeaderContainerTitleContentSecondContainerSPAN = styled.span`
  font-family: inherit;
  overflow-wrap: break-word;
  color: inherit;
  white-space: inherit;
  border: 0px solid black;
  display: inline;
  margin: 0;
  top: 1px;
  position: relative;
  padding: 0;
  cursor: pointer;
`;

export const Dashboard__ThreeDashed = styled.div`
  position: absolute;
  right: 15px;
  top: 55%;
  transform: translateY(-50%);
`;

export const Dashboard__ThreeDashedSVG = styled.svg`
  color: #dee3ea;
  user-select: none;
  position: relative;
  max-width: 100%;
  height: 1.5em;
  width: 1.5em;
  fill: currentColor;
  cursor: pointer;
`;

export const IndexDashboard__Main = styled.div`
  display: flex;
  align-items: flex-start;
  flex-shrink: 1;
  flex-grow: 1;
  border: 0px solid black;
  flex-basis: auto;
  flex-direction: column;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
`;

export const IndexDashboard__MainContent = styled.div`
  width: 990px;
  flex-shrink: 1;
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  border: 0px solid black;
  flex-basis: auto;
  flex-direction: column;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
`;

export const IndexDashboard__MainContentContainer = styled.div`
  backface-visibility: hidden;
  display: flex;
  flex-grow: 1;
  align-items: stretch;
  border: 0px solid black;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
`;

export const IndexDashboard__MainContentContainerContent = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-grow: 1;
  flex-direction: row;
  width: 100%;
  min-height: 100%;
  border: 0px solid black;
  flex-basis: auto;
  flex-shrink: 0;
  margin: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
`;

export const IndexDashboard__MainContentContainerContent__Feed = styled.div`
  max-width: 600px;
  margin-right: 0px;
  margin-left: 0px;
  border: 0px solid black;
  display: flex;
  align-items: stretch;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  border-left-width: 1px;
  border-right-width: 1px;
  border-style: solid;
  border-color: #242c37;
  padding: 0px;
  min-width: 0px;
  min-height: 0px;
  position: relative;
`;

export const IndexDashboard__MainContentContainerContent__FeedContent = styled.div`
  display: flex;
  align-items: stretch;
  border: 0px solid black;
  flex-basis: auto;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
`;

export const IndexDashboard__MainContentContainerContent__FeedContent__Title = styled.div`
  position: sticky;
  top: -0.5px;
  backface-visibility: hidden;
  display: flex;
  align-items: stretch;
  flex-basis: A uto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
`;

export const IndexDashboard__MainContentContainerContent__FeedContent__TitleChild = styled.div`
  cursor: pointer;
  display: flex;
  align-items: stretch;
  border: 0px solid black;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
`;

export const IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainer = styled.div`
  height: 53px;
  display: flex;
  align-items: stretch;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  cursor: pointer;
`;

export const IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContent = styled.div`
  display: flex;
  align-items: stretch;
  border: 0px solid black;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  cursor: pointer;
`;

export const IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContentSubTitle = styled.div`
  height: 53px;
  display: flex;
  background-color: transparent;
  border-bottom: 1px solid #242c37;
  align-items: stretch;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  cursor: pointer;
`;

export const IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContentSubTitleContainer = styled.div`
  max-width: 1000px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 598px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  border: 0px solid black;
  flex-basis: auto;
  flex-shrink: 0;
  min-height: 0px;
  min-width: 0px;
  position: relative;
  cursor: pointer;
`;

export const IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContentSubTitleContainerFirst = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 1;
  height: 100%;
  flex-grow: 1;
  border: 0px solid black;
  flex-basis: auto;
  flex-direction: column;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  cursor: pointer;
`;

export const IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContentSubTitleContainerFirstContent = styled.div`
  display: flex;
  align-items: flex-start;
  border: 0px solid black;
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

export const IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContentSubTitleContainerFirstContentH2 = styled.h2`
  font-weight: 800;
  line-height: 24px;
  font-size: 20px;
  color: #dee3ea;
  overflow-wrap: break-word;
  min-width: 0px;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 0px solid black;
  font-family: Inter-Bold;
  display: inline;
  margin: 0;
  padding: 0;
  list-style: outside none none;
  text-align: inherit;
  text-decoration: none;
`;

export const IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContentSubTitleContainerFirstContentH2SPAN = styled.span`
  font-family: inherit;
  overflow-wrap: break-word;
  color: inherit;
  white-space: inherit;
  border: 0px solid black;
  display: inline;
  margin: 0;
  padding: 0;
  text-align: inherit;
  list-style: outside none none;
  cursor: pointer;
`;

export const TweetNotification__FeedTitle = styled.div`
  margin-left: 16px;
  min-height: 32px;
  min-width: 32px;
  align-self: stretch;
  justify-content: center;
  align-items: flex-end;
  border: 0px solid black;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  padding: 0px;
  position: relative;
  cursor: pointer;
`;

export const TweetNotification__FeedTitleContainer = styled.div`
  margin-right: calc(-10px);
  min-width: 40px;
  min-height: 40px;
  outline-style: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  user-select: none;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0);
  border-style: solid;
  border-radius: 9999;
  display: flex;
  align-items: stretch;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  padding: 0px;
  position: relative;
  cursor: pointer;
`;

export const TweetNotification__FeedTitleContainerContent = styled.div`
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
  color: #fd4d4d;
  text-align: center;
  border: 0px solid black;
  margin: 0px;
  padding: 0px;
  white-space: pre-wrap;
  cursor: pointer;
  border-radius: 9999px;

  &:hover {
    background-color: rgba(253, 77, 77, 0.1);
  }
`;

export const TweetNotification__FeedTitleContainerContentSVG = styled.svg`
  width: 22px;
  height: 22px;
  color: #fd4d4d;
  user-select: none;
  position: relative;
  max-width: 100%;
  fill: currentColor;
  display: inline-block;
  font-weight: 700;
  line-height: 20px;
  overflow-wrap: break-word;
  text-align: center;
  white-space: pre-wrap;
  cursor: pointer;
`;

export const ShowMore__Container = styled.div`
  max-height: calc(100vh - 47px);
  box-shadow: rgb(101 119 134 / 20%) 0px 0px 15px,
    rgb(101 119 134 / 15%) 0px 0px 3px 1px;
  width: 220px;
  overflow-y: auto;
  z-index: 999;
  position: fixed;
  background-color: #151a21;
  overscroll-behavior: contain;
  border-radius: 4px;
  border: 0px solid black;
  display: flex;
  margin-left: 12px;
  flex-basis: auto;
  flex-direction: column;
  z-index: 9999;
  flex-shrink: 0;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
`;

export const ShowMore__Content = styled.div`
  display: flex;
  align-items: stretch;
  border: 0px solid black;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  padding: 0px;
  min-width: 0px;
  min-height: 0px;
  position: relative;
`;

export const ShowMore__ContentContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  position: relative;
  flex-direction: column;
`;

export const ShowMore__ContentContainerLink = styled.a`
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  cursor: pointer;
  max-width: 100%;
  width: 100%;

  &:hover {
    background-color: rgba(247, 249, 249, 0.1);
  }
`;

export const ShowMore__ContentContainerLinkContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  font-family: Inter-Regular;
  position: relative;
`;

export const ShowMore__ContentContainerLinkContainerSVG = styled.svg`
  margin-right: 12px;
  color: #dee3ea;
  position: relative;
  fill: currentColor;
  height: 1.6em;
  width: 1.6em;
`;

export const ShowMore__ContentContainerLinkContainerTitle = styled.div`
  font-weight: 400;
  color: #dee3ea;
  font-size: 15px;
  line-height: 20px;
  margin-top: 2px;
`;

export const ShowMore__ContentContainerLinkContainerTitleSPAN = styled.span`
  font-family: inherit;
  color: inherit;
  white-space: inherit;
`;

export const ShowMore__BackgroundFixed = styled.div`
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const ShowProfile__Container = styled.div`
  position: fixed;
  bottom: 90px;
  backface-visibility: hidden;
  pointer-events: none;
  border: 0px solid black;
  display: flex;
  z-index: 999999999999;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-width: 0px;
  min-height: 0px;
  padding: 0px;

  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(21, 26, 33, 1);
    width: 24px;
    transform: rotate(45deg);
    height: 24px;
  }
`;

export const ShowProfile__Content = styled.div`
  align-self: stretch;
  flex-shrink: 1;
  flex-grow: 1;
  border: 0px solid black;
  align-items: stretch;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
`;

export const ShowProfile__Dialog = styled.div`
  display: flex;
  align-items: stretch;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0;
  position: relative;
`;

export const ShowProfile__DialogContent = styled.div`
  box-shadow: rgb(101 119 134 / 20%) 0px 0px 15px,
    rgb(101 119 134 / 15%) 0px 0px 3px 1px;
  background-color: #151a21;
  border-radius: 16px;
  display: flex;
  align-items: stretch;
  border: 0px solid black;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0;
  min-width: 0;
  min-height: 0;
  padding: 0;
  position: relative;
`;

export const ShowProfile__DialogContent__Container = styled.div`
  width: 280px;
  min-width: 240px;
  min-height: 30px;
  max-width: 360px;
  max-height: 480px;
  overflow: auto;
  border: 0px solid black;
  display: flex;
  align-items: stretch;
  flex-basis: auto;
  margin: 0;
  flex-direction: column;
  flex-shrink: 0;
  padding: 0;
  position: relative;
`;

export const ShowProfile__DialogContent__ContainerContent = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  align-items: stretch;
  border: 0px solid black;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  padding-right: 0px;
  padding-left: 0px;
  position: relative;
`;

export const ShowProfile__DialogContent__ContainerContentLI = styled.li`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(239, 243, 244);
  outline-style: none;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: stretch;
  border: 0px solid black;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-width: 0px;
  min-height: 0px;
  position: relative;
  color: inherit;
  list-style: none;
  text-align: inherit;
  text-decoration: none;
`;

export const ShowProfile__DialogContent__ContainerContentLIDIV = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  border: 0px solid black;
  flex-basis: auto;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
`;

export const ShowProfile__DialogContent__ContainerContentLIDIVAvatar = styled.div`
  display: flex;
  flex-basis: 48px;
  margin-right: 12px;
  flex-grow: 0;
  justify-content: center;
  border: 0px solid black;
  align-items: stretch;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
`;

export const ShowProfile__DialogContent__ContainerContentLIDIVAvatarContent = styled.div`
  height: 48px;
  width: 100%;
  outline-style: none;
  background-color: rgb(255, 255, 255);
  border-radius: 9999px;
  overflow: hidden;
  display: block;
  align-items: stretch;
  border: 0px solid black;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0;
  min-width: 0;
  padding: 0;
  position: relative;
`;

export const ShowProfile__DialogContent__ContainerContentLIDIVAvatarContentDIVChild = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
`;

export const ShowProfile__DialogContent__ContainerContentLIDIVAvatarContentDIVChildImage = styled.div`
  flex-basis: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 9999px;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  padding: 0px;
`;

export const ShowProfile__DialogContent__ContainerContentLIDIVAvatarContentDIVChildImageContent = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  border: 0px solid black;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  min-width: 0;
  min-height: 0;
  padding: 0;
`;

export const ShowProfile__DialogContent__InformationTitle = styled.div`
  display: flex;
  flex-basis: 0px;
  flex-grow: 1;
  border: 0px solid black;
  align-items: stretch;
  flex-direction: column;
  flex-shrink: 0;
  min-height: 0;
  margin-left: 15px;
  min-width: 0;
  padding: 0;
  position: relative;
`;

export const ShowProfile__DialogContent__InformationTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border: 0px solid black;
  flex-basis: auto;
  flex-shrink: 0;
  margin: 0;
  min-height: 0;
  min-width: 0;
  padding: 0;
  position: relative;
`;

export const ShowProfile__DialogContent__InformationTitleContainerContent = styled.div`
  outline-style: none;
  flex-shrink: 1;
  max-width: 100%;
  display: flex;
  align-items: stretch;
  flex-basis: auto;
  flex-direction: column;
  margin: 0;
  min-height: 0;
  min-width: 0;
  padding: 0;
  position: relative;
`;

export const ShowProfile__DialogContent__InformationTitleContainerContentFirst = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  max-width: 100%;
  border: 0px solid black;
  flex-basis: auto;
  flex-shrink: 0;
  margin: 0;
  min-width: 0px;
  min-height: 0px;
  padding: 0;
  position: relative;
`;

export const ShowProfile__DialogContent__InformationTitleContainerContentFirstText = styled.div`
  white-space: nowrap;
  font-weight: 700;
  font-size: 15px;
  color: #dee3ea;
  line-height: 20px;
  overflow-wrap: break-word;
  min-width: 0px;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
  border: 0px solid black;
  display: inline;
  margin: 0;
  padding: 0;
  font-family: Inter-Regular;
`;

export const ShowProfile__DialogContent__InformationTitleContainerContentFirstTextSpan = styled.span`
  font-family: inherit;
  overflow-wrap: break-word;
  min-width: 0px;
  color: inherit;
  white-space: inherit;
  border: 0px solid black;
  display: inline;
  margin: 0;
  padding: 0;
`;

export const ShowProfile__DialogContent__InformationTitleContainerContentFirstTextSpanChild = styled.span`
  font-family: inherit;
  overflow-wrap: break-word;
  min-width: 0;
  color: inherit;
  white-space: inherit;
  border: 0px solid black;
  margin: 0;
  padding: 0;
`;

export const ShowProfile__DialogContent__InformationTitleContainerContentSecond = styled.div`
  flex-shrink: 1;
  flex-direction: row;
  align-items: stretch;
  border: 0px solid black;
  display: flex;
  margin: 0;
  min-height: 0;
  min-width: 0;
  padding: 0;
  position: relative;
`;

export const ShowProfile__DialogContent__InformationTitleContainerContentSecondContent = styled.div`
  color: rgb(83, 100, 113);
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  overflow-wrap: break-word;
  min-width: 0px;
  flex-direction: row;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 0px solid black;
  display: inline;
  margin: 0px;
  padding: 0px;
`;

export const ShowProfile__DialogContent__InformationTitleContainerContentSecondContentSpan = styled.span`
  font-family: inherit;
  overflow-wrap: break-word;
  min-width: 0;
  color: inherit;
  white-space: inherit;
  border: 0px solid black;
  display: inline;
  margin: 0;
  padding: 0;
`;

export const ShowProfile__DialogContent__InformationTitleContainerContentSVG = styled.svg`
  margin-left: 12px;
  flex-shrink: 0;
  color: #fd4d4d;
  user-select: none;
  vertical-align: text-bottom;
  position: relative;
  top: 14px;
  max-width: 100%;
  height: 1.6em;
  width: 1.6em;
  fill: currentColor;
  display: inline-block;
`;

export const ShowProfile__DialogContent__ContainerContentLink = styled.a`
  outline-style: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  cursor: pointer;
  flex-direction: row;
  width: 100%;
  padding: 16px;
  align-items: stretch;
  border: 0px solid black;
  flex-basis: auto;
  border-top: 1px solid rgb(93, 114, 144);
  flex-shrink: 0;
  margin: 0;
  min-height: 0;
  min-width: 0;
  position: relative;
`;

export const ShowProfile__DialogContent__ContainerContentLinkContent = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-grow: 1;
  align-items: stretch;
  border: 0px solid black;
  flex-basis: auto;
  margin: 0;
  min-width: 0;
  min-height: 0;
  padding: 0;
  position: relative;
  cursor: pointer;
`;

export const ShowProfile__DialogContent__ContainerContentLinkContentMessage = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: #dee3ea;
  line-height: 20px;
  overflow-wrap: break-word;
  min-width: 0px;
  border: 0px solid black;
  display: inline;
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
  font-family: Inter-Regular;
`;

export const ShowProfile__DialogContent__ContainerContentLinkContentMessageSpan = styled.span`
  font-family: inherit;
  overflow-wrap: break-word;
  min-width: 0px;
  color: inherit;
  white-space: inherit;
  border: 0px solid black;
  margin: 0;
  display: inline;
  padding: 0;
`;
