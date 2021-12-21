import "../css/getStarted.css";
import GetStartedItem from "../Components/GetStartedItem";

function GetStarted() {
  return (
    <div className="getStarted-div" id="getStarted">
      <div className="getStartedBackground">
        <h2 className="getStartedH2">Resources</h2>
        <p className="getStartedP">
          Here are some helpful links to get you started with the purchase of
          your next home.
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
    </div>
  );
}

export default GetStarted;
