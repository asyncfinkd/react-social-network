import React, { useState } from "react";
import * as Styled from "../../styles/dashboard/DashboardStyles";

export default function IndexDashboard() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [showMore, setShowMore] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <>
      <Styled.IndexDashboard__Container>
        <Styled.IndexDashboard__Container>
          <Styled.IndexDashboard__Content>
            <Styled.IndexDashboard__Header>
              <Styled.IndexDashboard__HeaderContent>
                <Styled.Dashboard__HeaderFirstContainer>
                  <Styled.Dashboard__HeaderFirstContainerContent>
                    <Styled.Dashboard__HeaderFirstContainerContentFirst>
                      <Styled.Dashboard__LogoContainer>
                        <Styled.Dashboard__LogoContainerH1>
                          <Styled.Dashboard__LogoContainerLink>
                            <Styled.Dashboard__LogoContainerLinkContainer>
                              <Styled.Dashboard__LogoContainerLinkContainerSVG
                                viewBox="0 0 168 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M56.0865 13.1801H60.3243C62.746 13.1801 64.3892 13.7069 65.6865 14.8483C67.2433 16.341 68.1081 18.4483 68.0216 20.6434C68.1081 22.9263 67.2433 25.1214 65.6 26.7019C64.1297 27.9311 62.3135 28.5457 60.4108 28.4579H56V13.1801H56.0865ZM59.1135 25.8238H59.7189C61.0162 25.9116 62.227 25.5604 63.2649 24.7702C64.3892 23.7165 64.9946 22.2239 64.9081 20.7312C64.9081 17.7459 63.0919 15.7264 60.2378 15.7264H59.1135V25.8238Z"
                                  fill="#FD4D4D"
                                ></path>
                                <path
                                  d="M80.9937 23.1896C80.9937 26.2627 78.4856 28.7212 75.4586 28.7212H75.3721C72.4315 28.8968 69.9234 26.5261 69.7505 23.5408C69.7505 23.3652 69.7505 23.2774 69.7505 23.1018C69.664 20.1165 71.9126 17.5701 74.8532 17.4823C75.0261 17.4823 75.1991 17.4823 75.3721 17.4823C78.3991 17.3945 80.9072 19.7652 80.9937 22.8384C80.9937 22.9262 80.9937 23.1018 80.9937 23.1896ZM72.518 23.1018C72.4315 24.6823 73.5559 25.9993 75.1126 26.0871C76.6694 26.1749 77.9667 25.0335 78.0532 23.453C78.0532 23.3652 78.0532 23.2774 78.0532 23.1018C78.0532 21.1701 77.0153 20.0287 75.2856 20.0287C73.7288 20.0287 72.518 21.1701 72.4315 22.7506C72.518 22.9262 72.518 23.014 72.518 23.1018Z"
                                  fill="#FD4D4D"
                                ></path>
                                <path
                                  d="M91.2873 17.8339H94.0549V27.5801C94.0549 29.7752 93.6225 31.0045 92.6711 31.9703C91.4603 33.024 89.9035 33.6386 88.3468 33.5508C86.4441 33.6386 84.6279 32.8484 83.2441 31.4435L84.9738 29.5996C85.7522 30.5655 86.963 31.0923 88.1738 31.0923C89.7306 31.2679 91.0279 30.1264 91.2008 28.546C91.2008 28.3704 91.2008 28.1948 91.2008 27.9313V26.8777C90.336 28.0191 88.9522 28.6338 87.5684 28.6338C84.7144 28.6338 82.6387 26.2631 82.6387 23.1021C82.6387 19.6778 84.7143 17.3949 87.8279 17.3949C89.1252 17.3071 90.4225 17.9217 91.2008 19.0631L91.2873 17.8339ZM85.7522 23.0143C85.5792 24.5948 86.79 25.9997 88.3468 26.0875C89.2117 26.1753 90.0765 25.824 90.6819 25.1216C91.1144 24.5948 91.2873 23.8924 91.2008 23.1899C91.2873 22.3119 91.0279 21.4339 90.4225 20.7314C89.9035 20.2046 89.2116 19.9412 88.5198 19.9412C86.963 19.9412 85.7522 21.1704 85.7522 22.6631C85.7522 22.8387 85.7522 22.9265 85.7522 23.0143Z"
                                  fill="#FD4D4D"
                                ></path>
                                <path
                                  d="M99.1564 23.8043C99.4158 25.297 100.8 26.3506 102.356 26.175C103.135 26.0872 103.913 25.5604 104.346 24.858L106.94 25.5604C105.989 27.5799 104.086 28.8091 101.924 28.8091C98.9834 28.9847 96.3888 26.614 96.3023 23.5409C96.3023 23.3653 96.3023 23.2775 96.3023 23.1019C96.1293 20.1165 98.378 17.658 101.319 17.4824C101.492 17.4824 101.578 17.4824 101.751 17.4824C104.692 17.3946 107.286 19.6775 107.373 22.7507C107.373 22.9263 107.373 23.1019 107.373 23.2775V23.8043H99.1564ZM104.346 22.136C104.173 20.819 103.048 19.8531 101.664 19.8531C100.367 19.7653 99.2429 20.7312 99.0699 22.136H104.346Z"
                                  fill="#FD4D4D"
                                ></path>
                                <path
                                  d="M112.563 28.3701H109.449V13.1801H112.563V19.5897H118.271V13.1801H121.384V28.3701H118.271V22.1361H112.563V28.3701Z"
                                  fill="#FD4D4D"
                                ></path>
                                <path
                                  d="M134.443 23.1896C134.443 26.2627 131.935 28.7212 128.908 28.7212H128.821C125.881 28.8968 123.286 26.5261 123.2 23.5408C123.2 23.3652 123.2 23.2774 123.2 23.1018C123.113 20.1165 125.362 17.5701 128.302 17.4823C128.475 17.4823 128.648 17.4823 128.821 17.4823C131.848 17.3945 134.356 19.7652 134.443 22.8384C134.443 22.9262 134.443 23.1018 134.443 23.1896ZM126.054 23.1018C125.967 24.6823 127.092 25.9993 128.648 26.0871C130.205 26.1749 131.502 25.0335 131.589 23.453C131.589 23.3652 131.589 23.2774 131.589 23.1018C131.589 21.1701 130.551 20.0287 128.821 20.0287C127.265 20.0287 126.054 21.1701 125.967 22.7506C126.054 22.9262 126.054 23.014 126.054 23.1018Z"
                                  fill="#FD4D4D"
                                ></path>
                                <path
                                  d="M145.514 17.8335V24.5066C145.514 26.0871 145.168 26.9651 144.304 27.6675C143.352 28.4578 142.141 28.809 140.931 28.7212C139.633 28.809 138.423 28.37 137.471 27.5797C136.693 26.7895 136.26 25.648 136.347 24.5066V17.8335H139.201V24.331C139.114 25.2968 139.72 26.1749 140.671 26.2627C140.758 26.2627 140.844 26.2627 140.931 26.2627C141.796 26.3505 142.574 25.648 142.574 24.77C142.574 24.6822 142.574 24.5944 142.574 24.5066V17.8335H145.514Z"
                                  fill="#FD4D4D"
                                ></path>
                                <path
                                  d="M152.605 20.9067V20.7311C152.605 20.1165 152.086 19.6775 151.308 19.6775C150.53 19.6775 150.184 20.0287 150.184 20.6433C150.184 20.9067 150.27 21.1701 150.443 21.3458C150.789 21.6092 150.789 21.6092 152.259 22.0482C154.594 22.7506 155.546 23.7165 155.546 25.3847C155.546 27.4042 153.903 28.8091 151.481 28.8091C149.059 28.8091 147.503 27.492 147.416 25.3847H150.184C150.357 26.2628 150.702 26.7018 151.567 26.7018C152.173 26.7896 152.605 26.3506 152.692 25.736C152.692 25.736 152.692 25.736 152.692 25.6481C152.692 25.0335 152.259 24.6823 150.789 24.2433C148.54 23.5409 147.502 22.575 147.502 20.9067C147.502 18.8872 149.059 17.5702 151.481 17.5702C153.903 17.5702 155.286 18.7994 155.373 20.9945L152.605 20.9067Z"
                                  fill="#FD4D4D"
                                ></path>
                                <path
                                  d="M159.783 23.8043C160.043 25.2969 161.427 26.3506 162.983 26.175C163.762 26.0872 164.54 25.5604 164.973 24.8579L167.567 25.5604C166.616 27.5798 164.713 28.8091 162.551 28.8091C159.61 28.8969 157.016 26.5262 156.929 23.5409C156.929 23.4531 156.929 23.2775 156.929 23.1896C156.756 20.2043 159.005 17.7458 161.945 17.5702C162.118 17.5702 162.291 17.5702 162.378 17.5702C165.405 17.4824 167.913 19.7653 168 22.8384C168 23.014 168 23.1896 168 23.3653V23.8921H159.783V23.8043ZM164.973 22.136C164.8 20.8189 163.675 19.8531 162.291 19.8531C160.994 19.7653 159.87 20.7311 159.697 22.136H164.973Z"
                                  fill="#FD4D4D"
                                ></path>
                                <path
                                  d="M10.0006 0H29.3993C34.9418 0 39.3999 4.52599 39.3999 10.1529V29.8471C39.3999 35.474 34.9418 40 29.3993 40H10.0006C4.45809 40 0 35.474 0 29.8471V10.1529C0 4.52599 4.45809 0 10.0006 0Z"
                                  fill="#EFE7DC"
                                ></path>
                                <path
                                  d="M5.30238 22.1408C5.18189 21.2846 5.66385 20.4283 6.38678 20.0613C7.95314 19.0827 9.88096 18.9604 11.5678 19.6944C12.1703 20.0613 12.7727 20.306 13.3751 20.7953C13.9776 21.1622 14.2186 22.0185 13.8571 22.7525C13.3751 23.6087 12.8932 24.3427 12.1703 25.0766C10.8449 26.7892 8.4351 27.0338 6.62776 25.6882C6.50727 25.5659 6.26629 25.4436 6.14581 25.1989C5.54336 24.3427 5.18189 23.2418 5.30238 22.1408Z"
                                  fill="black"
                                ></path>
                                <path
                                  d="M25.6633 17.6147C24.9404 17.4924 24.3379 17.4924 23.7355 17.2477C23.133 17.0031 22.8921 16.3915 23.0125 15.6575C23.374 13.945 24.8199 12.7217 26.5067 12.3548C28.3141 11.9878 30.1214 12.9664 30.9648 14.6789C31.0853 14.9236 30.8443 15.4129 30.8443 15.7798H30.6033V14.8012L29.3985 16.2691C28.6755 17.0031 27.7116 17.3701 26.6272 17.2477C26.1453 17.2477 26.0248 16.8808 26.0248 16.3915C26.0248 15.7798 26.0248 15.2905 26.1453 14.6789C26.2657 14.1896 26.5067 13.578 26.7477 13.0887C26.0248 12.7217 25.0609 13.3334 24.3379 14.5566C23.856 15.5352 24.2174 16.3915 25.6633 17.6147Z"
                                  fill="black"
                                ></path>
                                <path
                                  d="M22.6523 31.315C20.6039 31.9266 18.5556 33.0275 16.2663 32.5383C15.9049 32.4159 15.5434 32.2936 15.1819 32.1713C13.4951 31.4373 11.6878 30.948 9.88043 30.8257C8.43456 30.5811 7.10919 30.0918 5.9043 29.3578C6.14527 29.2355 6.38625 29.2355 6.62723 29.2355C7.83212 28.9909 9.1575 29.2355 10.3624 29.7248C11.8083 30.4587 13.2541 30.8257 14.7 31.682C15.6639 32.049 16.7483 32.1713 17.7122 31.8043C18.7966 31.5597 19.7605 31.315 20.8449 31.0704C21.4474 31.0704 22.0498 31.0704 22.6523 31.0704V31.315Z"
                                  fill="black"
                                ></path>
                                <path
                                  d="M13.2528 10.8868C12.8914 9.78589 11.566 9.17427 10.4816 9.66356C10.3611 9.66356 10.3611 9.66356 10.2406 9.78589C9.27671 10.1529 8.79476 11.0091 8.67427 11.9877C8.67427 12.11 8.67427 12.3547 8.55378 12.477C8.3128 13.5779 8.67427 13.9449 9.75867 14.0672C10.1201 14.0672 10.4816 14.0672 10.8431 14.0672C11.9275 14.0672 12.8914 13.3333 13.2528 12.2324C13.3733 11.8654 13.3733 11.3761 13.2528 10.8868ZM10.3611 13.8226C9.63818 13.7003 9.15622 13.0886 9.15622 12.477C9.27671 11.2538 10.1201 10.2752 11.325 10.1529C9.3972 11.0091 9.63818 12.3547 10.3611 13.8226Z"
                                  fill="black"
                                ></path>
                              </Styled.Dashboard__LogoContainerLinkContainerSVG>
                            </Styled.Dashboard__LogoContainerLinkContainer>
                          </Styled.Dashboard__LogoContainerLink>
                        </Styled.Dashboard__LogoContainerH1>
                      </Styled.Dashboard__LogoContainer>
                      <Styled.Dashboard__HeroContainer>
                        <Styled.Dashboard__HeroContainer__Nav>
                          <Styled.Dashboard__HeroContainer__NavLink>
                            <Styled.Dashboard__HeroContainer__NavLinkContainer>
                              <Styled.Dashboard__NavLinkContainerContentIcon>
                                <Styled.Dashboard__NavLinkContainerContentIconSVG
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  className="active__navLink"
                                >
                                  <g>
                                    <path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path>
                                  </g>
                                </Styled.Dashboard__NavLinkContainerContentIconSVG>
                              </Styled.Dashboard__NavLinkContainerContentIcon>
                              <Styled.DashboardNavLink__ContainerTitles>
                                <Styled.DashboardNavLink__ContainerTitlesSPAN className="active__navLink">
                                  Home
                                </Styled.DashboardNavLink__ContainerTitlesSPAN>
                              </Styled.DashboardNavLink__ContainerTitles>
                            </Styled.Dashboard__HeroContainer__NavLinkContainer>
                          </Styled.Dashboard__HeroContainer__NavLink>
                          <Styled.Dashboard__HeroContainer__NavLink>
                            <Styled.Dashboard__HeroContainer__NavLinkContainer>
                              <Styled.Dashboard__NavLinkContainerContentIcon>
                                <Styled.Dashboard__NavLinkContainerContentIconSVG
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <g>
                                    <path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"></path>
                                  </g>
                                </Styled.Dashboard__NavLinkContainerContentIconSVG>
                              </Styled.Dashboard__NavLinkContainerContentIcon>
                              <Styled.DashboardNavLink__ContainerTitles>
                                <Styled.DashboardNavLink__ContainerTitlesSPAN>
                                  Explore
                                </Styled.DashboardNavLink__ContainerTitlesSPAN>
                              </Styled.DashboardNavLink__ContainerTitles>
                            </Styled.Dashboard__HeroContainer__NavLinkContainer>
                          </Styled.Dashboard__HeroContainer__NavLink>
                          <Styled.Dashboard__HeroContainer__NavLink>
                            <Styled.Dashboard__HeroContainer__NavLinkContainer>
                              <Styled.Dashboard__NavLinkContainerContentIcon>
                                <Styled.Dashboard__NavLinkContainerContentIconSVG
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <g>
                                    <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"></path>
                                  </g>
                                </Styled.Dashboard__NavLinkContainerContentIconSVG>
                              </Styled.Dashboard__NavLinkContainerContentIcon>
                              <Styled.DashboardNavLink__ContainerTitles>
                                <Styled.DashboardNavLink__ContainerTitlesSPAN>
                                  Notifications
                                </Styled.DashboardNavLink__ContainerTitlesSPAN>
                              </Styled.DashboardNavLink__ContainerTitles>
                            </Styled.Dashboard__HeroContainer__NavLinkContainer>
                          </Styled.Dashboard__HeroContainer__NavLink>
                          <Styled.Dashboard__HeroContainer__NavLink>
                            <Styled.Dashboard__HeroContainer__NavLinkContainer>
                              <Styled.Dashboard__NavLinkContainerContentIcon>
                                <Styled.Dashboard__NavLinkContainerContentIconSVG
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <g>
                                    <path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"></path>
                                  </g>
                                </Styled.Dashboard__NavLinkContainerContentIconSVG>
                              </Styled.Dashboard__NavLinkContainerContentIcon>
                              <Styled.DashboardNavLink__ContainerTitles>
                                <Styled.DashboardNavLink__ContainerTitlesSPAN>
                                  Messages
                                </Styled.DashboardNavLink__ContainerTitlesSPAN>
                              </Styled.DashboardNavLink__ContainerTitles>
                            </Styled.Dashboard__HeroContainer__NavLinkContainer>
                          </Styled.Dashboard__HeroContainer__NavLink>
                          <Styled.Dashboard__HeroContainer__NavLink>
                            <Styled.Dashboard__HeroContainer__NavLinkContainer>
                              <Styled.Dashboard__NavLinkContainerContentIcon>
                                <Styled.Dashboard__NavLinkContainerContentIconSVG
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <g>
                                    <path d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"></path>
                                  </g>
                                </Styled.Dashboard__NavLinkContainerContentIconSVG>
                              </Styled.Dashboard__NavLinkContainerContentIcon>
                              <Styled.DashboardNavLink__ContainerTitles>
                                <Styled.DashboardNavLink__ContainerTitlesSPAN>
                                  Bookmarks
                                </Styled.DashboardNavLink__ContainerTitlesSPAN>
                              </Styled.DashboardNavLink__ContainerTitles>
                            </Styled.Dashboard__HeroContainer__NavLinkContainer>
                          </Styled.Dashboard__HeroContainer__NavLink>
                          <Styled.Dashboard__HeroContainer__NavLink>
                            <Styled.Dashboard__HeroContainer__NavLinkContainer>
                              <Styled.Dashboard__NavLinkContainerContentIcon>
                                <Styled.Dashboard__NavLinkContainerContentIconSVG
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <g>
                                    <path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z"></path>
                                    <path d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"></path>
                                  </g>
                                </Styled.Dashboard__NavLinkContainerContentIconSVG>
                              </Styled.Dashboard__NavLinkContainerContentIcon>
                              <Styled.DashboardNavLink__ContainerTitles>
                                <Styled.DashboardNavLink__ContainerTitlesSPAN>
                                  Lists
                                </Styled.DashboardNavLink__ContainerTitlesSPAN>
                              </Styled.DashboardNavLink__ContainerTitles>
                            </Styled.Dashboard__HeroContainer__NavLinkContainer>
                          </Styled.Dashboard__HeroContainer__NavLink>
                          <Styled.Dashboard__HeroContainer__NavLink>
                            <Styled.Dashboard__HeroContainer__NavLinkContainer>
                              <Styled.Dashboard__NavLinkContainerContentIcon>
                                <Styled.Dashboard__NavLinkContainerContentIconSVG
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <g>
                                    <path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path>
                                  </g>
                                </Styled.Dashboard__NavLinkContainerContentIconSVG>
                              </Styled.Dashboard__NavLinkContainerContentIcon>
                              <Styled.DashboardNavLink__ContainerTitles>
                                <Styled.DashboardNavLink__ContainerTitlesSPAN>
                                  Profile
                                </Styled.DashboardNavLink__ContainerTitlesSPAN>
                              </Styled.DashboardNavLink__ContainerTitles>
                            </Styled.Dashboard__HeroContainer__NavLinkContainer>
                          </Styled.Dashboard__HeroContainer__NavLink>
                          <Styled.Dashboard__HeroContainer__NavLink
                            onClick={() => setShowMore(!showMore)}
                          >
                            <Styled.Dashboard__HeroContainer__NavLinkContainer>
                              <Styled.Dashboard__NavLinkContainerContentIcon>
                                <Styled.Dashboard__NavLinkContainerContentIconSVG
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                >
                                  <g>
                                    <circle cx="17" cy="12" r="1.5"></circle>
                                    <circle cx="12" cy="12" r="1.5"></circle>
                                    <circle cx="7" cy="12" r="1.5"></circle>
                                    <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
                                  </g>
                                </Styled.Dashboard__NavLinkContainerContentIconSVG>
                              </Styled.Dashboard__NavLinkContainerContentIcon>
                              <Styled.DashboardNavLink__ContainerTitles>
                                <Styled.DashboardNavLink__ContainerTitlesSPAN>
                                  More
                                </Styled.DashboardNavLink__ContainerTitlesSPAN>
                              </Styled.DashboardNavLink__ContainerTitles>
                            </Styled.Dashboard__HeroContainer__NavLinkContainer>
                          </Styled.Dashboard__HeroContainer__NavLink>
                        </Styled.Dashboard__HeroContainer__Nav>
                        {showMore && (
                          <>
                            <Styled.ShowMore__BackgroundFixed
                              onClick={() => {
                                setShowMore(!showMore);
                              }}
                            ></Styled.ShowMore__BackgroundFixed>
                            <Styled.ShowMore__Container role="main">
                              <div>
                                <Styled.ShowMore__Content>
                                  <Styled.ShowMore__ContentContainer>
                                    <Styled.ShowMore__ContentContainerLink>
                                      <Styled.ShowMore__ContentContainerLinkContainer>
                                        <Styled.ShowMore__ContentContainerLinkContainerSVG>
                                          <g>
                                            <path d="M12.003 23.274c-.083 0-.167-.014-.248-.042-.3-.105-.502-.39-.502-.708v-4.14c-2.08-.172-4.013-1.066-5.506-2.56-3.45-3.45-3.45-9.062 0-12.51s9.062-3.45 12.512 0c3.096 3.097 3.45 8.07.82 11.565l-6.49 8.112c-.146.182-.363.282-.587.282zm0-21.05c-1.882 0-3.763.717-5.195 2.15-2.864 2.863-2.864 7.524 0 10.39 1.388 1.387 3.233 2.15 5.195 2.15.414 0 .75.337.75.75v2.72l5.142-6.425c2.17-2.885 1.876-7.014-.696-9.587-1.434-1.43-3.316-2.148-5.197-2.148z"></path>
                                            <path d="M15.55 8.7h-7.1c-.413 0-.75-.337-.75-.75s.337-.75.75-.75h7.1c.413 0 .75.335.75.75s-.337.75-.75.75zm-3.05 3.238H8.45c-.413 0-.75-.336-.75-.75s.337-.75.75-.75h4.05c.414 0 .75.336.75.75s-.336.75-.75.75z"></path>
                                          </g>
                                        </Styled.ShowMore__ContentContainerLinkContainerSVG>
                                        <Styled.ShowMore__ContentContainerLinkContainerTitle>
                                          <Styled.ShowMore__ContentContainerLinkContainerTitleSPAN>
                                            Topics
                                          </Styled.ShowMore__ContentContainerLinkContainerTitleSPAN>
                                        </Styled.ShowMore__ContentContainerLinkContainerTitle>
                                      </Styled.ShowMore__ContentContainerLinkContainer>
                                    </Styled.ShowMore__ContentContainerLink>
                                    <Styled.ShowMore__ContentContainerLink>
                                      <Styled.ShowMore__ContentContainerLinkContainer>
                                        <Styled.ShowMore__ContentContainerLinkContainerSVG>
                                          <g>
                                            <path d="M8.98 22.698c-.103 0-.205-.02-.302-.063-.31-.135-.49-.46-.44-.794l1.228-8.527H6.542c-.22 0-.43-.098-.573-.266-.144-.17-.204-.393-.167-.61L7.49 2.5c.062-.36.373-.625.74-.625h6.81c.23 0 .447.105.59.285.142.18.194.415.14.64l-1.446 6.075H19c.29 0 .553.166.678.428.124.262.087.57-.096.796L9.562 22.42c-.146.18-.362.276-.583.276zM7.43 11.812h2.903c.218 0 .425.095.567.26.142.164.206.382.175.598l-.966 6.7 7.313-8.995h-4.05c-.228 0-.445-.105-.588-.285-.142-.18-.194-.415-.14-.64l1.446-6.075H8.864L7.43 11.812z"></path>
                                          </g>
                                        </Styled.ShowMore__ContentContainerLinkContainerSVG>
                                        <Styled.ShowMore__ContentContainerLinkContainerTitle>
                                          <Styled.ShowMore__ContentContainerLinkContainerTitleSPAN>
                                            Moments
                                          </Styled.ShowMore__ContentContainerLinkContainerTitleSPAN>
                                        </Styled.ShowMore__ContentContainerLinkContainerTitle>
                                      </Styled.ShowMore__ContentContainerLinkContainer>
                                    </Styled.ShowMore__ContentContainerLink>
                                    <Styled.ShowMore__ContentContainerLink>
                                      <Styled.ShowMore__ContentContainerLinkContainer>
                                        <Styled.ShowMore__ContentContainerLinkContainerSVG>
                                          <g>
                                            <path d="M14 11.25H6c-.414 0-.75.336-.75.75s.336.75.75.75h8c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm0-4H6c-.414 0-.75.336-.75.75s.336.75.75.75h8c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.25 8H6c-.414 0-.75.336-.75.75s.336.75.75.75h4.75c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
                                            <path d="M21.5 11.25h-3.25v-7C18.25 3.01 17.24 2 16 2H4C2.76 2 1.75 3.01 1.75 4.25v15.5C1.75 20.99 2.76 22 4 22h15.5c1.517 0 2.75-1.233 2.75-2.75V12c0-.414-.336-.75-.75-.75zm-18.25 8.5V4.25c0-.413.337-.75.75-.75h12c.413 0 .75.337.75.75v15c0 .452.12.873.315 1.25H4c-.413 0-.75-.337-.75-.75zm16.25.75c-.69 0-1.25-.56-1.25-1.25v-6.5h2.5v6.5c0 .69-.56 1.25-1.25 1.25z"></path>
                                          </g>
                                        </Styled.ShowMore__ContentContainerLinkContainerSVG>
                                        <Styled.ShowMore__ContentContainerLinkContainerTitle>
                                          <Styled.ShowMore__ContentContainerLinkContainerTitleSPAN>
                                            Newsletters
                                          </Styled.ShowMore__ContentContainerLinkContainerTitleSPAN>
                                        </Styled.ShowMore__ContentContainerLinkContainerTitle>
                                      </Styled.ShowMore__ContentContainerLinkContainer>
                                    </Styled.ShowMore__ContentContainerLink>
                                    <Styled.ShowMore__ContentContainerLink>
                                      <Styled.ShowMore__ContentContainerLinkContainer>
                                        <Styled.ShowMore__ContentContainerLinkContainerSVG>
                                          <g>
                                            <path d="M20.75 22H3.25C2.01 22 1 20.99 1 19.75V4.25C1 3.01 2.01 2 3.25 2h17.5C21.99 2 23 3.01 23 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM3.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h17.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H3.25z"></path>
                                            <path d="M16.758 6.982h-5.806c-.414 0-.75.336-.75.75s.336.75.75.75h3.995L6.92 16.508c-.292.293-.292.768 0 1.06.147.147.34.22.53.22s.385-.072.53-.22l8.027-8.025v3.995c0 .414.336.75.75.75s.75-.336.75-.75V7.732c0-.414-.335-.75-.75-.75z"></path>
                                          </g>
                                        </Styled.ShowMore__ContentContainerLinkContainerSVG>
                                        <Styled.ShowMore__ContentContainerLinkContainerTitle>
                                          <Styled.ShowMore__ContentContainerLinkContainerTitleSPAN>
                                            DogeHouse Ads
                                          </Styled.ShowMore__ContentContainerLinkContainerTitleSPAN>
                                        </Styled.ShowMore__ContentContainerLinkContainerTitle>
                                      </Styled.ShowMore__ContentContainerLinkContainer>
                                    </Styled.ShowMore__ContentContainerLink>
                                    <Styled.ShowMore__ContentContainerLink>
                                      <Styled.ShowMore__ContentContainerLinkContainer>
                                        <Styled.ShowMore__ContentContainerLinkContainerSVG>
                                          <g>
                                            <path d="M12 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v18.5c0 .414-.336.75-.75.75zm5.14 0c-.415 0-.75-.336-.75-.75V7.89c0-.415.335-.75.75-.75s.75.335.75.75v13.36c0 .414-.337.75-.75.75zM6.86 22c-.413 0-.75-.336-.75-.75V10.973c0-.414.337-.75.75-.75s.75.336.75.75V21.25c0 .414-.335.75-.75.75z"></path>
                                          </g>
                                        </Styled.ShowMore__ContentContainerLinkContainerSVG>
                                        <Styled.ShowMore__ContentContainerLinkContainerTitle>
                                          <Styled.ShowMore__ContentContainerLinkContainerTitleSPAN>
                                            Analytics
                                          </Styled.ShowMore__ContentContainerLinkContainerTitleSPAN>
                                        </Styled.ShowMore__ContentContainerLinkContainerTitle>
                                      </Styled.ShowMore__ContentContainerLinkContainer>
                                    </Styled.ShowMore__ContentContainerLink>
                                    <div
                                      style={{
                                        backgroundColor: "#5d7290",
                                        height: "1px",
                                        marginTop: "2px",
                                        marginBottom: "2px",
                                        width: "100%",
                                      }}
                                    ></div>
                                    <Styled.ShowMore__ContentContainerLink>
                                      <Styled.ShowMore__ContentContainerLinkContainer>
                                        <Styled.ShowMore__ContentContainerLinkContainerSVG>
                                          <g>
                                            <path d="M12 8.21c-2.09 0-3.79 1.7-3.79 3.79s1.7 3.79 3.79 3.79 3.79-1.7 3.79-3.79-1.7-3.79-3.79-3.79zm0 6.08c-1.262 0-2.29-1.026-2.29-2.29S10.74 9.71 12 9.71s2.29 1.026 2.29 2.29-1.028 2.29-2.29 2.29z"></path>
                                            <path d="M12.36 22.375h-.722c-1.183 0-2.154-.888-2.262-2.064l-.014-.147c-.025-.287-.207-.533-.472-.644-.286-.12-.582-.065-.798.115l-.116.097c-.868.725-2.253.663-3.06-.14l-.51-.51c-.836-.84-.896-2.154-.14-3.06l.098-.118c.186-.222.23-.523.122-.787-.11-.272-.358-.454-.646-.48l-.15-.014c-1.18-.107-2.067-1.08-2.067-2.262v-.722c0-1.183.888-2.154 2.064-2.262l.156-.014c.285-.025.53-.207.642-.473.11-.27.065-.573-.12-.795l-.094-.116c-.757-.908-.698-2.223.137-3.06l.512-.512c.804-.804 2.188-.865 3.06-.14l.116.098c.218.184.528.23.79.122.27-.112.452-.358.477-.643l.014-.153c.107-1.18 1.08-2.066 2.262-2.066h.722c1.183 0 2.154.888 2.262 2.064l.014.156c.025.285.206.53.472.64.277.117.58.062.794-.117l.12-.102c.867-.723 2.254-.662 3.06.14l.51.512c.836.838.896 2.153.14 3.06l-.1.118c-.188.22-.234.522-.123.788.112.27.36.45.646.478l.152.014c1.18.107 2.067 1.08 2.067 2.262v.723c0 1.183-.888 2.154-2.064 2.262l-.155.014c-.284.024-.53.205-.64.47-.113.272-.067.574.117.795l.1.12c.756.905.696 2.22-.14 3.06l-.51.51c-.807.804-2.19.864-3.06.14l-.115-.096c-.217-.183-.53-.23-.79-.122-.273.114-.455.36-.48.646l-.014.15c-.107 1.173-1.08 2.06-2.262 2.06zm-3.773-4.42c.3 0 .593.06.87.175.79.328 1.324 1.054 1.4 1.896l.014.147c.037.4.367.7.77.7h.722c.4 0 .73-.3.768-.7l.014-.148c.076-.842.61-1.567 1.392-1.892.793-.33 1.696-.182 2.333.35l.113.094c.178.148.366.18.493.18.206 0 .4-.08.546-.227l.51-.51c.284-.284.305-.73.048-1.038l-.1-.12c-.542-.65-.677-1.54-.352-2.323.326-.79 1.052-1.32 1.894-1.397l.155-.014c.397-.037.7-.367.7-.77v-.722c0-.4-.303-.73-.702-.768l-.152-.014c-.846-.078-1.57-.61-1.895-1.393-.326-.788-.19-1.678.353-2.327l.1-.118c.257-.31.236-.756-.048-1.04l-.51-.51c-.146-.147-.34-.227-.546-.227-.127 0-.315.032-.492.18l-.12.1c-.634.528-1.55.67-2.322.354-.788-.327-1.32-1.052-1.397-1.896l-.014-.155c-.035-.397-.365-.7-.767-.7h-.723c-.4 0-.73.303-.768.702l-.014.152c-.076.843-.608 1.568-1.39 1.893-.787.326-1.693.183-2.33-.35l-.118-.096c-.18-.15-.368-.18-.495-.18-.206 0-.4.08-.546.226l-.512.51c-.282.284-.303.73-.046 1.038l.1.118c.54.653.677 1.544.352 2.325-.327.788-1.052 1.32-1.895 1.397l-.156.014c-.397.037-.7.367-.7.77v.722c0 .4.303.73.702.768l.15.014c.848.078 1.573.612 1.897 1.396.325.786.19 1.675-.353 2.325l-.096.115c-.26.31-.238.756.046 1.04l.51.51c.146.147.34.227.546.227.127 0 .315-.03.492-.18l.116-.096c.406-.336.923-.524 1.453-.524z"></path>
                                          </g>
                                        </Styled.ShowMore__ContentContainerLinkContainerSVG>
                                        <Styled.ShowMore__ContentContainerLinkContainerTitle>
                                          <Styled.ShowMore__ContentContainerLinkContainerTitleSPAN>
                                            Settings and privacy
                                          </Styled.ShowMore__ContentContainerLinkContainerTitleSPAN>
                                        </Styled.ShowMore__ContentContainerLinkContainerTitle>
                                      </Styled.ShowMore__ContentContainerLinkContainer>
                                    </Styled.ShowMore__ContentContainerLink>
                                    <Styled.ShowMore__ContentContainerLink>
                                      <Styled.ShowMore__ContentContainerLinkContainer>
                                        <Styled.ShowMore__ContentContainerLinkContainerSVG>
                                          <g>
                                            <path d="M12.025 22.75c-5.928 0-10.75-4.822-10.75-10.75S6.098 1.25 12.025 1.25 22.775 6.072 22.775 12s-4.822 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z"></path>
                                            <path d="M13.064 17.47c0-.616-.498-1.114-1.114-1.114-.616 0-1.114.498-1.114 1.114 0 .615.498 1.114 1.114 1.114.616 0 1.114-.5 1.114-1.114zm3.081-7.528c0-2.312-1.882-4.194-4.194-4.194-2.312 0-4.194 1.882-4.194 4.194 0 .414.336.75.75.75s.75-.336.75-.75c0-1.485 1.21-2.694 2.695-2.694 1.486 0 2.695 1.21 2.695 2.694 0 1.486-1.21 2.695-2.694 2.695-.413 0-.75.336-.75.75v1.137c0 .414.337.75.75.75s.75-.336.75-.75v-.463c1.955-.354 3.445-2.06 3.445-4.118z"></path>
                                          </g>
                                        </Styled.ShowMore__ContentContainerLinkContainerSVG>
                                        <Styled.ShowMore__ContentContainerLinkContainerTitle>
                                          <Styled.ShowMore__ContentContainerLinkContainerTitleSPAN>
                                            Help Center
                                          </Styled.ShowMore__ContentContainerLinkContainerTitleSPAN>
                                        </Styled.ShowMore__ContentContainerLinkContainerTitle>
                                      </Styled.ShowMore__ContentContainerLinkContainer>
                                    </Styled.ShowMore__ContentContainerLink>
                                    <Styled.ShowMore__ContentContainerLink>
                                      <Styled.ShowMore__ContentContainerLinkContainer>
                                        <Styled.ShowMore__ContentContainerLinkContainerSVG>
                                          <g>
                                            <path d="M15.692 11.205l6.383-7.216c.45-.45.45-1.18 0-1.628-.45-.45-1.178-.45-1.627 0l-7.232 6.402s.782.106 1.595.93c.548.558.882 1.51.882 1.51z"></path>
                                            <path d="M17.45 22.28H3.673c-1.148 0-2.083-.946-2.083-2.11V7.926c0-1.165.934-2.112 2.082-2.112h5.836c.414 0 .75.336.75.75s-.336.75-.75.75H3.672c-.32 0-.583.274-.583.612V20.17c0 .336.26.61.582.61h13.78c.32 0 .583-.273.583-.61v-6.28c0-.415.336-.75.75-.75s.75.335.75.75v6.28c0 1.163-.934 2.11-2.084 2.11z"></path>
                                            <path d="M8.18 16.99c-.19.154-.476.032-.504-.21-.137-1.214-.234-4.053 1.483-5.943.908-1 3.02-1.52 4.475-.198s1.14 3.473.23 4.473c-2.07 2.15-3.428.058-5.686 1.878z"></path>
                                          </g>
                                        </Styled.ShowMore__ContentContainerLinkContainerSVG>
                                        <Styled.ShowMore__ContentContainerLinkContainerTitle>
                                          <Styled.ShowMore__ContentContainerLinkContainerTitleSPAN>
                                            Display
                                          </Styled.ShowMore__ContentContainerLinkContainerTitleSPAN>
                                        </Styled.ShowMore__ContentContainerLinkContainerTitle>
                                      </Styled.ShowMore__ContentContainerLinkContainer>
                                    </Styled.ShowMore__ContentContainerLink>
                                    <Styled.ShowMore__ContentContainerLink>
                                      <Styled.ShowMore__ContentContainerLinkContainer>
                                        <Styled.ShowMore__ContentContainerLinkContainerSVG>
                                          <g>
                                            <circle
                                              cx="12"
                                              cy="6.674"
                                              r="1.889"
                                            ></circle>
                                            <path d="M9.828 14.817l-1.62 3.342c-.138.41.083.857.495.995s.858-.083.996-.495l1.602-3.176c.28-.557 1.076-.556 1.356 0l1.608 3.195c.138.41.584.632.996.494.412-.138.633-.584.495-.996l-1.62-3.342.032.07-.123-.262c-.483-1.027-.535-2.19-.16-3.24.106-.302.392-.505.712-.505h2.032c.434 0 .786-.353.786-.787 0-.434-.352-.786-.786-.786H7.37c-.435 0-.787.352-.787.786 0 .434.352.786.786.786h1.985c.32 0 .606.2.713.503.374 1.05.323 2.214-.158 3.24l-.125.263"></path>
                                            <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
                                          </g>
                                        </Styled.ShowMore__ContentContainerLinkContainerSVG>
                                        <Styled.ShowMore__ContentContainerLinkContainerTitle>
                                          <Styled.ShowMore__ContentContainerLinkContainerTitleSPAN>
                                            Keyboard shortcuts
                                          </Styled.ShowMore__ContentContainerLinkContainerTitleSPAN>
                                        </Styled.ShowMore__ContentContainerLinkContainerTitle>
                                      </Styled.ShowMore__ContentContainerLinkContainer>
                                    </Styled.ShowMore__ContentContainerLink>
                                  </Styled.ShowMore__ContentContainer>
                                </Styled.ShowMore__Content>
                              </div>
                            </Styled.ShowMore__Container>
                          </>
                        )}
                      </Styled.Dashboard__HeroContainer>
                      <Styled.TweetButton>
                        <Styled.TweetButtonLink>
                          <Styled.TweetButtonLink__Container>
                            <Styled.TweetButtonLink__ContainerSPAN>
                              <div>
                                <Styled.TweetButtonLink__Content>
                                  <Styled.TweetButtonLink__ContentSPAN>
                                    <Styled.TweetButtonLink__ContentSPANChild>
                                      Tweet
                                    </Styled.TweetButtonLink__ContentSPANChild>
                                  </Styled.TweetButtonLink__ContentSPAN>
                                </Styled.TweetButtonLink__Content>
                              </div>
                            </Styled.TweetButtonLink__ContainerSPAN>
                          </Styled.TweetButtonLink__Container>
                        </Styled.TweetButtonLink>
                      </Styled.TweetButton>
                    </Styled.Dashboard__HeaderFirstContainerContentFirst>
                    <Styled.Dashboard__HeaderSecondContainer>
                      {showProfile && (
                        <>
                          <Styled.ShowProfile__Container>
                            <Styled.ShowProfile__Content>
                              <Styled.ShowProfile__Dialog role="dialog">
                                <div>
                                  <Styled.ShowProfile__DialogContent>
                                    <Styled.ShowProfile__DialogContent__Container>
                                      <Styled.ShowProfile__DialogContent__ContainerContent>
                                        <Styled.ShowProfile__DialogContent__ContainerContentLI role="listitem">
                                          <Styled.ShowProfile__DialogContent__ContainerContentLIDIV>
                                            <Styled.ShowProfile__DialogContent__ContainerContentLIDIVAvatar>
                                              <Styled.ShowProfile__DialogContent__ContainerContentLIDIVAvatarContent>
                                                <Styled.ShowProfile__DialogContent__ContainerContentLIDIVAvatarContentDIVChildImageContent src="https://scontent.ftbs2-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=nyKhkR6NhPQAX-jQZM1&_nc_ht=scontent.ftbs2-1.fna&oh=be2e6b35c6c1de53b9af83750ddf81ce&oe=611F51F8" />
                                              </Styled.ShowProfile__DialogContent__ContainerContentLIDIVAvatarContent>
                                            </Styled.ShowProfile__DialogContent__ContainerContentLIDIVAvatar>
                                            <Styled.ShowProfile__DialogContent__InformationTitle>
                                              <Styled.ShowProfile__DialogContent__InformationTitleContainer>
                                                <Styled.ShowProfile__DialogContent__InformationTitleContainerContent>
                                                  <Styled.ShowProfile__DialogContent__InformationTitleContainerContent>
                                                    <Styled.ShowProfile__DialogContent__InformationTitleContainerContentFirst>
                                                      <Styled.ShowProfile__DialogContent__InformationTitleContainerContentFirstText>
                                                        <Styled.ShowProfile__DialogContent__InformationTitleContainerContentFirstTextSpan>
                                                          <Styled.ShowProfile__DialogContent__InformationTitleContainerContentFirstTextSpanChild></Styled.ShowProfile__DialogContent__InformationTitleContainerContentFirstTextSpanChild>
                                                          {user.firstName}{" "}
                                                          {user.lastName}
                                                        </Styled.ShowProfile__DialogContent__InformationTitleContainerContentFirstTextSpan>
                                                      </Styled.ShowProfile__DialogContent__InformationTitleContainerContentFirstText>
                                                    </Styled.ShowProfile__DialogContent__InformationTitleContainerContentFirst>
                                                    <Styled.ShowProfile__DialogContent__InformationTitleContainerContentSecond>
                                                      <Styled.ShowProfile__DialogContent__InformationTitleContainerContentSecondContent>
                                                        <Styled.ShowProfile__DialogContent__InformationTitleContainerContentSecondContentSpan>
                                                          {user.email}
                                                        </Styled.ShowProfile__DialogContent__InformationTitleContainerContentSecondContentSpan>
                                                      </Styled.ShowProfile__DialogContent__InformationTitleContainerContentSecondContent>
                                                    </Styled.ShowProfile__DialogContent__InformationTitleContainerContentSecond>
                                                  </Styled.ShowProfile__DialogContent__InformationTitleContainerContent>
                                                </Styled.ShowProfile__DialogContent__InformationTitleContainerContent>
                                              </Styled.ShowProfile__DialogContent__InformationTitleContainer>
                                            </Styled.ShowProfile__DialogContent__InformationTitle>
                                            <Styled.ShowProfile__DialogContent__InformationTitleContainerContentSVG>
                                              <g>
                                                <path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"></path>
                                              </g>
                                            </Styled.ShowProfile__DialogContent__InformationTitleContainerContentSVG>
                                          </Styled.ShowProfile__DialogContent__ContainerContentLIDIV>
                                        </Styled.ShowProfile__DialogContent__ContainerContentLI>
                                        <Styled.ShowProfile__DialogContent__ContainerContentLink role="menuitem">
                                          <Styled.ShowProfile__DialogContent__ContainerContentLinkContent>
                                            <Styled.ShowProfile__DialogContent__ContainerContentLinkContentMessage>
                                              <Styled.ShowProfile__DialogContent__ContainerContentLinkContentMessageSpan>
                                                Add an existing account
                                              </Styled.ShowProfile__DialogContent__ContainerContentLinkContentMessageSpan>
                                            </Styled.ShowProfile__DialogContent__ContainerContentLinkContentMessage>
                                          </Styled.ShowProfile__DialogContent__ContainerContentLinkContent>
                                        </Styled.ShowProfile__DialogContent__ContainerContentLink>
                                        <Styled.ShowProfile__DialogContent__ContainerContentLink role="menuitem">
                                          <Styled.ShowProfile__DialogContent__ContainerContentLinkContent>
                                            <Styled.ShowProfile__DialogContent__ContainerContentLinkContentMessage>
                                              <Styled.ShowProfile__DialogContent__ContainerContentLinkContentMessageSpan>
                                                Log out {user.email}
                                              </Styled.ShowProfile__DialogContent__ContainerContentLinkContentMessageSpan>
                                            </Styled.ShowProfile__DialogContent__ContainerContentLinkContentMessage>
                                          </Styled.ShowProfile__DialogContent__ContainerContentLinkContent>
                                        </Styled.ShowProfile__DialogContent__ContainerContentLink>
                                      </Styled.ShowProfile__DialogContent__ContainerContent>
                                    </Styled.ShowProfile__DialogContent__Container>
                                  </Styled.ShowProfile__DialogContent>
                                </div>
                              </Styled.ShowProfile__Dialog>
                            </Styled.ShowProfile__Content>
                          </Styled.ShowProfile__Container>
                        </>
                      )}
                      <Styled.Dashboard__HeaderSecondContent
                        onClick={() => {
                          setShowProfile(!showProfile);
                        }}
                      >
                        <Styled.Dashboard__HeaderSecondContentContainer>
                          <Styled.Dashboard__HeaderSecontContainerLogo>
                            <Styled.Dashboard__HeaderSecontContentLogo>
                              <Styled.DashbordHeader__ContainerContent__Logo>
                                <Styled.DashbordHeader__ContainerContent__LogoContent>
                                  <Styled.IMAGEDashboard__Header></Styled.IMAGEDashboard__Header>
                                </Styled.DashbordHeader__ContainerContent__LogoContent>
                              </Styled.DashbordHeader__ContainerContent__Logo>
                            </Styled.Dashboard__HeaderSecontContentLogo>
                          </Styled.Dashboard__HeaderSecontContainerLogo>
                          <Styled.Dashboard__HeaderContainerTitle>
                            <Styled.Dashboard__HeaderContainerTitleContent>
                              <Styled.Dashboard__HeaderContainerTitleContentFirst>
                                <Styled.Dashboard__HeaderContainerTitleContentFirstContent>
                                  <Styled.Dashboard__HeaderContainerTitleContentFirstContentSPAN>
                                    <Styled.Dashboard__HeaderContainerTitleContentFirstContentSPANCONTENT>
                                      {user.firstName} {user.lastName}
                                    </Styled.Dashboard__HeaderContainerTitleContentFirstContentSPANCONTENT>
                                  </Styled.Dashboard__HeaderContainerTitleContentFirstContentSPAN>
                                </Styled.Dashboard__HeaderContainerTitleContentFirstContent>
                              </Styled.Dashboard__HeaderContainerTitleContentFirst>
                              <Styled.Dashboard__HeaderContainerTitleContentSecond>
                                <Styled.Dashboard__HeaderContainerTitleContentSecondContainer>
                                  <Styled.Dashboard__HeaderContainerTitleContentSecondContainerSPAN>
                                    {user.email}
                                  </Styled.Dashboard__HeaderContainerTitleContentSecondContainerSPAN>
                                </Styled.Dashboard__HeaderContainerTitleContentSecondContainer>
                              </Styled.Dashboard__HeaderContainerTitleContentSecond>
                            </Styled.Dashboard__HeaderContainerTitleContent>
                          </Styled.Dashboard__HeaderContainerTitle>
                        </Styled.Dashboard__HeaderSecondContentContainer>
                        <Styled.Dashboard__ThreeDashed>
                          <Styled.Dashboard__ThreeDashedSVG>
                            <g>
                              <circle cx="5" cy="12" r="2"></circle>
                              <circle cx="12" cy="12" r="2"></circle>
                              <circle cx="19" cy="12" r="2"></circle>
                            </g>
                          </Styled.Dashboard__ThreeDashedSVG>
                        </Styled.Dashboard__ThreeDashed>
                      </Styled.Dashboard__HeaderSecondContent>
                    </Styled.Dashboard__HeaderSecondContainer>
                  </Styled.Dashboard__HeaderFirstContainerContent>
                </Styled.Dashboard__HeaderFirstContainer>
              </Styled.IndexDashboard__HeaderContent>
            </Styled.IndexDashboard__Header>
            <Styled.IndexDashboard__Main>
              <Styled.IndexDashboard__MainContent>
                <Styled.IndexDashboard__MainContentContainer>
                  <Styled.IndexDashboard__MainContentContainerContent>
                    <Styled.IndexDashboard__MainContentContainerContent__Feed>
                      <Styled.IndexDashboard__MainContentContainerContent__FeedContent>
                        <Styled.IndexDashboard__MainContentContainerContent__FeedContent__Title>
                          <Styled.IndexDashboard__MainContentContainerContent__FeedContent__TitleChild>
                            <Styled.IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainer>
                              <Styled.IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContent>
                                <Styled.IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContentSubTitle>
                                  <Styled.IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContentSubTitleContainer>
                                    <Styled.IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContentSubTitleContainerFirst>
                                      <Styled.IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContentSubTitleContainerFirstContent>
                                        <Styled.IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContentSubTitleContainerFirstContentH2>
                                          <Styled.IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContentSubTitleContainerFirstContentH2SPAN>
                                            Home
                                          </Styled.IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContentSubTitleContainerFirstContentH2SPAN>
                                        </Styled.IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContentSubTitleContainerFirstContentH2>
                                      </Styled.IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContentSubTitleContainerFirstContent>
                                    </Styled.IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContentSubTitleContainerFirst>
                                    <Styled.TweetNotification__FeedTitle>
                                      <Styled.TweetNotification__FeedTitleContainer>
                                        <Styled.TweetNotification__FeedTitleContainerContent>
                                          <Styled.TweetNotification__FeedTitleContainerContentSVG>
                                            <g>
                                              <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
                                            </g>
                                          </Styled.TweetNotification__FeedTitleContainerContentSVG>
                                        </Styled.TweetNotification__FeedTitleContainerContent>
                                      </Styled.TweetNotification__FeedTitleContainer>
                                    </Styled.TweetNotification__FeedTitle>
                                  </Styled.IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContentSubTitleContainer>
                                </Styled.IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContentSubTitle>
                              </Styled.IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainerContent>
                            </Styled.IndexDashboard__MainContentContainerContent__FeedContent__TitleChildContainer>
                          </Styled.IndexDashboard__MainContentContainerContent__FeedContent__TitleChild>
                        </Styled.IndexDashboard__MainContentContainerContent__FeedContent__Title>
                      </Styled.IndexDashboard__MainContentContainerContent__FeedContent>
                    </Styled.IndexDashboard__MainContentContainerContent__Feed>
                    {/* <div></div> */}
                  </Styled.IndexDashboard__MainContentContainerContent>
                </Styled.IndexDashboard__MainContentContainer>
              </Styled.IndexDashboard__MainContent>
            </Styled.IndexDashboard__Main>
          </Styled.IndexDashboard__Content>
        </Styled.IndexDashboard__Container>
      </Styled.IndexDashboard__Container>
    </>
  );
}
