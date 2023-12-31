import styled from 'styled-components';
import { NavLeftArrow, NavRightArrow, NotificationIcon } from './Icons';

// Styled components for the navbar
const Navbar = styled.nav`
  position: fixed;
  display: flex;
  height:24px;
  padding: 16px 22px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  width:calc(100vw - 456px);
  background-color:inherit;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content:center;
`;

const NavButton = styled.button`
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  border: none;
  padding: 6px 12px;
  text-align:center;
  // Add more styles for the button here
`;

const ProfileImage = styled.img`
  width: 36px; // Adjust size as needed
  height: 36px; // Adjust size as needed
  border-radius: 50%;
`;

// The component for the navbar
const FixedNavbar = () => {
  return (
    <Navbar>
      <NavContainer>
        <NavButton>
          <NavLeftArrow />
        </NavButton>
        <NavButton>
          <NavRightArrow />
        </NavButton>
      </NavContainer>
      <NavContainer>
        <NavButton>
          <NotificationIcon />
        </NavButton>
        <ProfileImage src='images/profile.png' alt='Profile' />
      </NavContainer>
    </Navbar>
  );
};

export default FixedNavbar;
