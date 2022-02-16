import logo from "../../images/logo.svg";

const LoginForm = () => {
  return (
    <section className="login">
      <div className="section--login">
        <div>
          <img className="icon" src={logo} alt="logo" /> devChallenges
        </div>
        <div className="login--main">
          <h3>Join thousands of learners from around the world</h3>
        </div>
        <div>
          <p className="login-para">
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </p>
        </div>
        <div className="login--input">
          <input className="login--input__email" type="email" placeholder="Email" /> <br /> <br />
          <input className="login--input__password" type="password" placeholder="Password" />
        </div>
        <div className="login--button">
          <button className="login--button__code">Start coding now</button>
        </div>
        <div className="continue--media">
          <p className="para--continue">
            or continue with these social profile
          </p>
        </div>
      </div>
      <div className="login-footer">
        <div>
          <p>
            Created by <a href="#top">username</a>
          </p>
        </div>
        <div>
          <p>
            <a href="#top">devChallenges.io </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
