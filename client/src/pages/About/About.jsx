import './About.css';

export const About = () => {
  return (
    <section className="section-about-us">
      <div className="container">
        <div className="about-us-heading">
          Unveiling Our Story Behind
          <div className="aboutus-logo-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="aboutus-logo-icon"
              viewBox="0 0 512 512"
            >
              <path
                d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M360 94.59V296M443.13 212.87L296 360M417.41 360H216M299.13 443.13l-144-144M152 416V216M68.87 299.13l144-144M94.59 152H288M212.87 68.87L360 216"
              />
            </svg>
            <h1 className="aboutus-logo-text">Startup Sprint</h1>
          </div>
        </div>
        <div className="about-us-body">
          <p>Welcome to <strong>Startup Sprint</strong>, where groundbreaking ideas meet opportunity!</p>
          <p>
            At <strong>Startup Sprint</strong>, we believe that every great startup begins with a simple yet powerful idea.
            Our platform is built to give aspiring entrepreneurs the stage they need to showcase their innovative concepts,
            receive valuable community feedback, and compete for funding from top venture capitalists.
          </p>
          <p>
            Our mission is to <strong>empower visionaries, foster innovation, and bridge the gap between ideas and investment</strong>.
            Here’s how it works:
          </p>
          <ul>
            <li><strong>✅ Submit Your Idea</strong> – Have a startup idea that could change the world? Share it with our community and gain visibility.</li>
            <li><strong>✅ Community Voting</strong> – Let the people decide! Users vote for the most promising ideas, helping the best rise to the top.</li>
            <li><strong>✅ Top 3 Get Funded</strong> – The three most-voted ideas secure a chance for real funding and mentorship from leading VCs.</li>
          </ul>
          <p>
            We’re not just a platform; we’re a <strong>launchpad for the next wave of game-changing startups</strong>.
            Whether you’re an aspiring entrepreneur, an investor looking for the next big thing, or a startup enthusiast who
            loves supporting innovation, <strong>Startup Sprint</strong> is the place for you.
          </p>
          <p>Join us in shaping the future—one idea at a time! 🚀</p>
        </div>
      </div>
    </section>
  );
};
