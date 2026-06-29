import { useState } from "react";
import { useNavigate } from "react-router";

import BookingProgress from "../components/ui/BookingProgress";
import Step1Category from "../components/ui/Step1Category";
import Step2Service from "../components/ui/Step2Service";
import Step3Date from "../components/ui/Step3Date";
import Step4Time from "../components/ui/Step4Time";
import Step5Info from "../components/ui/Step5Info";
import Step6Review from "../components/ui/Step6Review";


export default function BookingPage() {

    const navigate = useNavigate();

    const [ currentStep, setCurrentStep ] = useState(1);

    const [ bookingData, setBookingData ] = useState({
        category: "",
        service: "",
        date: "",
        time: "",
        info: {
            fullName: "",
            email: "",
            phone: ""
        }
    });

    const nextStep = () => {
        if (currentStep < 6) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const updateBooking = (field, value) => {
        setBookingData((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    const steps = {
        1: (
            <Step1Category
                data={bookingData}
                updateBooking={updateBooking}
            />
        ),

        2: (
            <Step2Service
                data={bookingData}
                updateBooking={updateBooking}
            />
        ),

        3: (
            <Step3Date
                data={bookingData}
                updateBooking={updateBooking}
            />
        ),

        4: (
            <Step4Time
                data={bookingData}
                updateBooking={updateBooking}
            />
        ),

        5: (
            <Step5Info
                data={bookingData}
                updateBooking={updateBooking}
            />
        ),

        6: <Step6Review data={bookingData} />
    };

    return (
        <div className="booking-section">
            <div className="booking-page-container">

                <BookingProgress currentStep={currentStep} />

                <div className="step-count">
                    <span>Step {currentStep} of 6</span>
                </div>

                <div className="booking-content">
                    {steps[currentStep]}

                    <div className="actions">
                        {currentStep > 1 && (
                            <button 
                            className="back-btn"
                            onClick={prevStep}
                            >
                                Back
                            </button>
                        )}

                        {currentStep < 6 && (
                            <button 
                            className="continue-btn"
                            onClick={nextStep}
                            >
                                Continue
                            </button>
                        )}

                        {currentStep === 6 && (
                            <button 
                            className="confirm-btn"
                            onClick={() => navigate("/dashboard")}
                            >
                                Confirm Booking
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}