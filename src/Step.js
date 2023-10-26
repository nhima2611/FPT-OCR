// import Step from "@mui/material/Step";
// import StepConnector, {
//   stepConnectorClasses,
// } from "@mui/material/StepConnector";
// import StepLabel from "@mui/material/StepLabel";
// import Stepper from "@mui/material/Stepper";
// import { styled } from "@mui/material/styles";
// import PropTypes from "prop-types";
// import * as React from "react";

// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 10,
//     left: "calc(-50% + 16px)",
//     right: "calc(50% + 16px)",
//     display: "flex",
//     flexDirection: "column",
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: "#3377FF",
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: "#3377FF",
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     borderColor:
//       theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
//     borderTopWidth: 3,
//     borderRadius: 1,
//   },
// }));

// const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
//   color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
//   //   display: "flex",
//   height: 22,
//   //   alignItems: "center",
//   //   circle active
//   ...(ownerState.active && {
//     color: "red",
//   }),
//   "& .QontoStepIcon-completedIcon": {
//     color: "#784af4",
//     zIndex: 1,
//     fontSize: 18,
//   },
//   "& .QontoStepIcon-circle": {
//     width: 24,
//     height: 24,
//     borderRadius: "50%",
//     backgroundColor: "transparent",
//     border: "2px solid #3377FF",
//     color: "red",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "16px",
//   },
// }));

// function QontoStepIcon(props) {
//   const { active, completed, className, icon } = props;

//   return (
//     <QontoStepIconRoot ownerState={{ active }} className={className}>
//       {completed ? (
//         // <Check className="QontoStepIcon-completedIcon" />
//         <div className="QontoStepIcon-completedIcon">
//           <svg
//             width="24"
//             height="25"
//             viewBox="0 0 24 25"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <g id="Outline/Status/24px/success-outlined">
//               <path
//                 id="Union"
//                 d="M2 12.3516C2 6.82871 6.47715 2.35156 12 2.35156C17.5228 2.35156 22 6.82871 22 12.3516C22 17.8744 17.5228 22.3516 12 22.3516C6.47715 22.3516 2 17.8744 2 12.3516ZM12 0.351562C5.37258 0.351562 0 5.72415 0 12.3516C0 18.979 5.37258 24.3516 12 24.3516C18.6274 24.3516 24 18.979 24 12.3516C24 5.72415 18.6274 0.351562 12 0.351562ZM17.7071 10.0587C18.0976 9.66815 18.0976 9.03498 17.7071 8.64446C17.3166 8.25393 16.6834 8.25393 16.2929 8.64446L11 13.9373L8.70711 11.6445C8.31658 11.2539 7.68342 11.2539 7.29289 11.6445C6.90237 12.035 6.90237 12.6681 7.29289 13.0587L10.2929 16.0587C10.6834 16.4492 11.3166 16.4492 11.7071 16.0587L17.7071 10.0587Z"
//                 fill="#3377FF"
//               />
//             </g>
//           </svg>
//         </div>
//       ) : (
//         <div className="QontoStepIcon-circle">{icon}</div>
//       )}
//     </QontoStepIconRoot>
//   );
// }

// QontoStepIcon.propTypes = {
//   /**
//    * Whether this step is active.
//    * @default false
//    */
//   active: PropTypes.bool,
//   className: PropTypes.string,
//   /**
//    * Mark the step as completed. Is passed to child components.
//    * @default false
//    */
//   completed: PropTypes.bool,
// };

// const steps = [
//   "Select campaign settings",
//   "Create an ad group",
//   "Create an ad",
// ];

// export default function CustomizedSteppers() {
//   return (
//     <Stepper
//       alternativeLabel
//       activeStep={2}
//       connector={<QontoConnector />}
//       orientation="vertical"
//     >
//       {steps.map((label) => (
//         <Step key={label}>
//           <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
//         </Step>
//       ))}
//     </Stepper>
//   );
// }

// StepperComponent.js
import React, { useState } from "react";
import "./StepperComponent.css";

const steps = ["Step 1", "Step 2", "Step 3"];

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="stepper-container">
      <div className="stepper">
        {steps.map((label, index) => (
          <div
            key={label}
            className={`step ${activeStep === index ? "active" : ""} ${
              activeStep > index ? "completed" : ""
            } `}
          >
            {/* <div className="step-circle">{index + 1}</div>
            <div
              className={`step-label ${activeStep === index ? "active" : ""} ${
                activeStep > index ? "completed" : ""
              }`}
            >
              {label}
            </div> */}
            {activeStep > index && activeStep !== 0 ? (
              <div>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Outline/Status/24px/success-outlined">
                    <path
                      id="Union"
                      d="M2 12.3516C2 6.82871 6.47715 2.35156 12 2.35156C17.5228 2.35156 22 6.82871 22 12.3516C22 17.8744 17.5228 22.3516 12 22.3516C6.47715 22.3516 2 17.8744 2 12.3516ZM12 0.351562C5.37258 0.351562 0 5.72415 0 12.3516C0 18.979 5.37258 24.3516 12 24.3516C18.6274 24.3516 24 18.979 24 12.3516C24 5.72415 18.6274 0.351562 12 0.351562ZM17.7071 10.0587C18.0976 9.66815 18.0976 9.03498 17.7071 8.64446C17.3166 8.25393 16.6834 8.25393 16.2929 8.64446L11 13.9373L8.70711 11.6445C8.31658 11.2539 7.68342 11.2539 7.29289 11.6445C6.90237 12.035 6.90237 12.6681 7.29289 13.0587L10.2929 16.0587C10.6834 16.4492 11.3166 16.4492 11.7071 16.0587L17.7071 10.0587Z"
                      fill="#3377FF"
                    />
                  </g>
                </svg>
              </div>
            ) : (
              <div className="step-circle">{index + 1}</div>
            )}
            <div
              className={`step-label ${activeStep === index ? "active" : ""} ${
                activeStep > index ? "completed" : ""
              }`}
            >
              {label}
            </div>
            {index < steps.length - 1 && <div className={`connector`} />}
          </div>
        ))}
      </div>
      <div>
        {activeStep === steps.length ? (
          <div>
            <p>All steps completed</p>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : (
          <div>
            <p>{`Step ${activeStep + 1}: ${steps[activeStep]}`}</p>
            <div className="button-container">
              <button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </button>
              <button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepperComponent;
