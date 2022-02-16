import logo from "../../images/logo.svg";

const Info = () => {
  return (
    <div className="form">
      <div>
        <h3 className="back">
          <a href="https://techstackmedia.com">Back</a>
        </h3>
        <h2>Change Info</h2>
        <p>Changes will be reflected to every services</p>
        <div>
          <img src={logo} width="72px" alt="" />
        </div>
      </div>
      <form>
        <div>
          <label for="name">Name</label>
          <input type="text" id="for" placeholder="Enter your name..." />
        </div>
        <div>
          <label for="name">Bio</label>
          <textarea placeholder="Enter your bio"></textarea>
        </div>
        <div>
          <label for="name">Phone</label>
          <input type="text" id="for" placeholder="Enter your phone..." />
        </div>
        <div>
          <label for="name">Email</label>
          <input type="text" id="for" placeholder="Enter your email..." />
        </div>
        <div>
          <label for="name">Password</label>
          <input type="text" id="for" placeholder="Enter your password..." />
        </div>

        <div>
          <input type="submit" value="Save" />
        </div>
      </form>
      <div className="footer">
        <div>
          <p>
            Created by <a href="https://techstackmedia.com">username</a>
          </p>
        </div>
        <div>
          <p>
            <a href="https://devchallenges.io">devChallenges.io</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
