import { Wrapper } from "./BurgerMenuStyle";

interface Props {
  navbarState: boolean;
  handleNavbar: () => void;
}

export default function BurgerMenu({ navbarState, handleNavbar }: Props) {
  return (
    <Wrapper onClick={handleNavbar}>
      <div className={navbarState ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
}
