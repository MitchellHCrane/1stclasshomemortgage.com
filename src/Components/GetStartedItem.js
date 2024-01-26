// Icons
import ApplicationIcon from "../images/get-started-icons/application.svg";
import LoanEducationIcon from "../images/get-started-icons/loan-education.svg";
import UploadDocumentIcon from "../images/get-started-icons/upload-documents.svg";
import PeaceHand from "../images/get-started-icons/peaceHand.svg";
import reviewIcon from "../images/get-started-icons/review.svg";

function GetStartedItem(props) {
  const iconName = () => {
    switch (props.iconName) {
      case "applicationIcon":
        return ApplicationIcon;
      case "loanEducationIcon":
        return LoanEducationIcon;
      case "uploadDocumentIcon":
        return UploadDocumentIcon;
      case "peaceHand":
        return PeaceHand;
      case "reviewIcon":
        return reviewIcon;
      default:
        return ApplicationIcon;
    }
  };

  return (
    <div className="grid-item">
      <div>
        <div className="getStartedIcon">
          <img src={iconName()} alt="get started item icon" />
        </div>
        <h3 className="getStartedCard">{props.title}</h3>
        <p className="getStartedCardP">{props.description}</p>
      </div>
    </div>
  );
}

export default GetStartedItem;
