const NavButton = ({ text, link }) => {
  return (
    <li>
      <a className="underline-animation" href={link}>
        {text}
      </a>
    </li>
  );
};

export default NavButton;
