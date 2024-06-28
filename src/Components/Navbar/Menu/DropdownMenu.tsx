import { CollapseWrapper, NavLinks, Anchor } from "./DropdownMenuStyle";
import { useSpring } from "react-spring";
import { NavigationLink } from "@Types/Navigation";

interface Props {
  navbarState: boolean;
  navigationLinks: NavigationLink[];
  handleNavbar: () => void;
}

export default function DropdownMenu({ navbarState, navigationLinks, handleNavbar }: Props) {
  const { open } = useSpring({ open: navbarState ? 0 : 1 });

  if (navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          {navigationLinks.map((link) => (
            <li key={link.target}>
              <Anchor
                activeClass="active"
                to={link.target}
                spy
                smooth
                offset={-100}
                duration={500}
                onClick={handleNavbar}
              >
                {link.name}
              </Anchor>
            </li>
          ))}
        </NavLinks>
      </CollapseWrapper>
    );
  } else {
    return null;
  }
}
