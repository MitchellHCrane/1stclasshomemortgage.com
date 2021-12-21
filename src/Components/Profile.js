import "../css/profile.css";
import "../css/App.css";
import ParticlesBg from "particles-bg";

function Profile() {
  return (
    <div className="profile-div">
      <div className="particle-bg">
        <ParticlesBg
          color="#2ca4f2"
          num={75}
          type="cobweb"
          bg={true}
          config={{ rps: 0.00001 }}
        />
      </div>
      <div className="profile-grid">
        <div className="columnPic">
          <img
            className="troyProfilePic"
            src="../images/troyWarnerProHeadshot.jpg"
            alt="Troy Warner Mortgage Banker"
          />
        </div>
        <div>
          <h1 className="profileName">First Class Home Mortgage</h1>
          <h2 className="NMLS">NMLS#1843</h2>
          <p className="profileP">
            We take the hassle out of your home buying experience. Contact us
            today and we will find the right solution for your needs.
          </p>
          <div className="buttonBlueDiv">
            <a href="tel:385-999-1871" className="buttonBlue">
              Call Us
            </a>
          </div>
          <div className="buttonBlueDiv">
            <a href="mailto:loans@troywarner.com" className="buttonBlue">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
