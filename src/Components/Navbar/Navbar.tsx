import { useSpring, config } from "react-spring";
import BurgerMenu from "./Menu/BurgerMenu";
import DropdownMenu from "./Menu/DropdownMenu";

import {
  Navigation,
  NavWrapper,
  LogoDesktopWrapper,
  LogoDeviceWrapper,
  Logo,
  UlList,
  ListItem,
  AnchorLink,
  BurgerWrapper,
} from "./NavbarStyle";
import useNavigation from "../../Hooks/useNavigation";

interface Props {
  navbarState: boolean;
  handleNavbar: () => void;
  handleActiveWork: () => void;
  handleActiveSkills: () => void;
}

export default function Navbar({ navbarState, handleNavbar }: Props) {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 1000,
    config: config.wobbly,
  });

  const { navigationLinks } = useNavigation();


  return (
    <>
      <Navigation style={barAnimation}>
        <nav className="container">
          <NavWrapper>
            <LogoDesktopWrapper>
              <Logo src={"images/logo-desktop.png"} />
            </LogoDesktopWrapper>

            <LogoDeviceWrapper>
              <Logo src={"images/logo-mobile.png"} />
            </LogoDeviceWrapper>

            <BurgerWrapper>
              <BurgerMenu
                navbarState={navbarState}
                handleNavbar={handleNavbar}
              />
            </BurgerWrapper>

            <UlList style={linkAnimation}>
              {navigationLinks.map((link) => (
                <ListItem key={link.target}>
                  <AnchorLink
                    activeClass="active"
                    to={link.target}
                    spy
                    smooth
                    offset={link.offset}
                    duration={500}
                  >
                    {link.name}
                  </AnchorLink>
                </ListItem>
              ))}
            </UlList>
          </NavWrapper>
        </nav>
      </Navigation>
      <DropdownMenu
        navigationLinks={navigationLinks}
        navbarState={navbarState}
        handleNavbar={handleNavbar}
      />
    </>
  );
}
