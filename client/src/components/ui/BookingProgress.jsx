import { Check } from "lucide-react";

export default function BookingProgress({ currentStep }) {

  const steps = [
    "Category",
    "Service",
    "Date",
    "Time",
    "Info",
    "Review"
  ];

  return (
    <div className="progress">

      {steps.map((step, index) => {
        const stepNumber = index + 1;

        return (
          <div
            key={step}
            className={`step 
              ${currentStep === stepNumber ? "active" : ""}
              ${currentStep > stepNumber ? "passed" : ""}
            `}
          >
            <div className="circle">
              {currentStep > stepNumber ? <Check size={18} /> : stepNumber}
            </div>
          </div>
        );
      })}

    </div>
  );
}