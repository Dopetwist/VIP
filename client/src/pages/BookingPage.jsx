import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { CircleAlert, CircleCheck } from "lucide-react";
import Toast from "../components/animation/Toast";

import BookingProgress from "../components/ui/BookingProgress";
import Step1Category from "../components/ui/Step1Category";
import Step2Service from "../components/ui/Step2Service";
import Step3Date from "../components/ui/Step3Date";
import Step4Time from "../components/ui/Step4Time";
import Step5Info from "../components/ui/Step5Info";
import Step6Review from "../components/ui/Step6Review";
import Modal from "../components/modal/Modal";


export default function BookingPage() {

    const navigate = useNavigate();

    const [ currentStep, setCurrentStep ] = useState(1);
    const [ showModal, setShowModal ] = useState(false);
    const [ isPaying, setIsPaying ] = useState(false);

    const [ toast, setToast ] = useState(null);

    const [ bookingData, setBookingData ] = useState({
        category: "",
        service: "",
        price: "",
        date: "",
        time: "",
        info: {
            fullName: "",
            email: "",
            phone: "",
            address: ""
        }
    });

    /* Effect to disable background scrolling when Modal is open and re-enable it when Modal is closed or component unmounts */
    useEffect(() => {
        document.body.style.overflow = showModal ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showModal]);
    
    const handleToast = (text) => {
        setToast({
            message: <span className="circle-check">
                    {currentStep < 6 ? <CircleAlert className="circle-icon" />
                        : <CircleCheck className="circle-icon" />
                    } 
                    {text} 
                </span>
        })
    }

    /* Function to handle payment */
    const handlePayment = () => {
        handleToast("Booking confirmed! You'll receive an email shortly.");
        setIsPaying(true);
        setTimeout(() => {
            navigate("/dashboard", { state: { 
                data: bookingData,
                active: "appointments" 
            } })
        }, 2000);
    }

    const nextStep = () => {

        switch (currentStep) {
            case 1:
                if (!bookingData.category) {
                    handleToast("Please select a category.");
                    return;
                }
                break;

            case 2: 
                if (!bookingData.service) {
                    handleToast("Please select a service.");
                    return;
                }
                break;

            case 3: 
                if (!bookingData.date) {
                    handleToast("Please select a date.");
                    return;
                }
                break;

            case 4: 
                if (!bookingData.time) {
                    handleToast("Please select a time slot.");
                    return;
                }
                break;

            case 5: 
                if (!bookingData.info.fullName || !bookingData.info.email || !bookingData.info.phone) {
                    handleToast("Please fill in all required fields.");
                    return;
                }
                break;
        }

        if (currentStep < 6) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const updateBooking = (updates) => {
        setBookingData((prev) => ({
            ...prev,
            ...updates
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
                            className="pay-btn"
                            onClick={() => setShowModal(true)}
                            >
                                Pay Now
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <Modal
                isOpen={showModal}
                bookingData={bookingData}
                title="Checkout"
                toast={toast}
                handleToast={handleToast}
                onConfirm={handlePayment}
                onCancel={() => setShowModal(false)}
                isLoading={isPaying}
            />

            {/* Render Toast */}
            {toast && (
                <Toast
                    message={toast.message}
                    onClose={() => setToast(null)}
                />
            )}
        </div>
    );
}