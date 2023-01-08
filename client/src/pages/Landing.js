import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='joby' className='logo' />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            repudiandae, eum dolore corporis assumenda blanditiis recusandae.
            Assumenda at magni odio est dolorum? Ipsum quam vero quas quaerat
            pariatur esse nesciunt.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>

        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
