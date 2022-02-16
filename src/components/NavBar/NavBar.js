import logo from "../../images/logo.svg";

const NavBar = () => {
  return (
    <header className="header">
      <div className="left">
        <img src={logo} alt="devchallenges logo" width="36px" />
        <h3>devchallenges</h3>
      </div>
      <div className="right">
          <img src={logo} alt=""  width="36px" />
          <h3>Xanthe Neal</h3>
      </div>
    </header>
  );
};

export default NavBar;
