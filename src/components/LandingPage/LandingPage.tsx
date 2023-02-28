import logo from '../../assets/images/RP-logo.png';

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <div className='logo'>
        <img src={logo} />
      </div>
      <h1>Welcome to the FED Assessment Dashboard</h1>
      <h3>Let's get you logged in</h3>
      <div className='email'>
        <label htmlFor='email' className='email--label'>
          Email Address
        </label>

        <input
          type='email'
          id='email'
          required
          className='email--input'
        ></input>
        <button type='submit' className='email--btn'>
          Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;

