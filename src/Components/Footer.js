import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <div className="footerGridItem">
          <h3 className="footerH3">Contact</h3>
          <p className="footerP">
            Phone: <a href="tel:385-999-1871">(385)-999-1871</a>
          </p>
          <p className="footerP">Fax: (801)-303-7083</p>
          <p className="footerP">
            Email:{" "}
            <a href="mailto:loans@troywarner.com">loans@troywarner.com</a>
          </p>
        </div>
        <div className="footerGridItem">
          <h3 className="footerH3">License Info</h3>
          <p className="footerP">
            Regulated by the Colorado Division of Real Estate NMLS #1843
          </p>
          <Link to={"/privacy-policy"} className="mt-1 text-sm underline">
            Privacy Policy
          </Link>
        </div>
        <div className="footerGridItem">
          <h3 className="footerH3">Address</h3>
          <p className="footerP">First Class Home Mortgage</p>
          <p className="footerP">
            <a
              href="https://goo.gl/maps/o97dcDxGxFcAcRheA"
              target="_blank"
              rel="noreferrer"
            >
              10808 River Front Parkway, Suite #3035,{<br />} South Jordan, UT
              84095
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
