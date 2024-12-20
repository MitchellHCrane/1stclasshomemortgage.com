export default function Profile() {
  return (
    <div className="profile-background">
      <div className="profile-div">
        <div className="profile-grid">
          <div className="columnPic">
            <img
              className="troyProfilePic"
              src="../images/1stclassimage.jpeg"
              alt="Troy Warner Mortgage Banker"
            />
          </div>
          <div>
            <h1 className="profileName">First Class Home Mortgage</h1>
            <h2 className="NMLS">NMLS#1843</h2>
            <p className="profileP">
              We take the hassle out of your home buying experience. Contact us
              today and we will find the right solution for you.
            </p>
            <div className="btns">
              <div className="buttonBlueDiv">
                <a href="tel:385-999-1871" className="buttonBlue">
                  Call 385-999-1871
                </a>
              </div>
              <div className="buttonWhiteDiv">
                <a href="mailto:loans@troywarner.com" className="buttonWhite">
                  Email Us
                </a>
              </div>
              <div className="">
                <a
                  href="https://dpa.1stclasshomemortgage.com"
                  target="_blank"
                  rel="noreferrer"
                  className="buttonGreen"
                >
                  Down Payment Assistance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
