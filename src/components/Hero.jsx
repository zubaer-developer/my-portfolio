const Hero = () => {
  return (
    <section>
      <div>
        {/* left side */}
        <div>
          <p>Hello, I am</p>
          <h1>MD. ZUBAER HOSSAIN</h1>
          <h2>Full Stack Developer</h2>
          <p>Short introduction here.....</p>
          {/* button */}
          <div>
            <button>Download Resume</button>
          </div>
          {/* socila links */}
          <div>
            <a href="#">Github</a>
            <a href="#">LinkedIn</a>
          </div>

          {/* Right side */}
          <div>
            <img src="../assets/profile.jpg" alt="Profile Photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
