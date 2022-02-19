import logo from "../../images/logo.svg";
import email from "../../images/email.svg";
import lock from "../../images/lock.svg";

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
          <div style={{ position: "relative" }}>
            <img
              style={{ position: "absolute", left: "20px", top: "32px" }}
              className="email"
              src={email}
              alt="email"
            />
          </div>
          <input
            className="login--input__email"
            type="email"
            placeholder="Email"
          />{" "}
          <br /> <br />
          <div style={{ position: "relative" }}>
            <img
              style={{ position: "absolute", left: "20px", top: "32px" }}
              className="lock"
              src={lock}
              alt="lock"
            />
          </div>
          <input
            className="login--input__password"
            type="password"
            placeholder="Password"
          />
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
      <div className="members--login">
        <div className="social--media__login">
          <i
            className="fab fa-google google__login"
            style={{ fontSize: "18px" }}
          ></i>
          <i
            className="fab fa-twitter-square twitter__login"
            style={{ fontSize: "18px" }}
          ></i>
          <i
            className="fab fa-facebook-square facebook__login"
            style={{ fontSize: "18px" }}
          ></i>
          <i
            className="fab fa-github github__login"
            style={{ fontSize: "18px" }}
          ></i>
        </div>
        <p>
          Already a member? <a href="https://techstackmedia.com">Login</a>
        </p>
      </div>
      <div className="login-footer">
        <div className="login-absolute">
          <p>
            created by <a href="#top">username</a>
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
