import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <h1>Welcome to the FED Assessment Dashboard</h1>
      <h3>Let's get you logged in</h3>
      <div className="email">
        <label htmlFor="email">Email Address</label>

        <input type="email" id="email" required></input>
        <button type="submit">Login</button>
      </div>
    </div>
  );
};

export default LandingPage;
