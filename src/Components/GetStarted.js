import "../css/getStarted.css";
import GetStartedItem from "../Components/GetStartedItem";

function GetStarted() {
  return (
    <div className="getStarted-div" id="getStarted">
      <div className="getStartedBackground">
        <h2 className="getStartedH2">We Can Help!</h2>
        <p className="getStartedP">
          Take the stress out of buying a home by working with First Class Home
          Mortgage specialists. Learn which home loan options are right for you
          and how the mortgage process works. We guide you through each step.
        </p>
      </div>
      <div className="grid-container">
        <GetStartedItem
          title="Home Purchases"
          description="Looking to buy your first home, First Class Home Mortgage has a variety of loans to help you find the perfect solution."
          // url=""
          iconName="applicationIcon"
          // btnText="Start Application"
        />

        <GetStartedItem
          title="Credit Problems?"
          description="We have mortgage loans to help you walk through all the options available to you."
          // url=""
          iconName="applicationIcon"
          // btnText="Start Learning"
        />

        <GetStartedItem
          title="Debt Consolidation"
          description="Tired of paying minimum payments on high-interest-rate credit cards? First Class Home Mortgage can help."
          // url=""
          iconName="applicationIcon"
          // btnText="Upload Documents"
        />
      </div>
      <div><h3 className="callNow">Call 385-999-1871</h3></div>
    </div>
  );
}

export default GetStarted;
