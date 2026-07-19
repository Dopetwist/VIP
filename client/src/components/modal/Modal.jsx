import { useNavigate } from "react-router";
import { X } from "lucide-react";

function Modal({ isOpen, bookingData, title, onCancel, onConfirm, isLoading = false }) {

    const navigate = useNavigate();
        
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onCancel}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div 
                className="close-btn"
                onClick={onCancel}
                >
                    <X size={26} color="#0a0a0a" />
                </div>

                <div className="transfer-container">
                    <h2 className="heading-text">Bank Transfer</h2>
                    <p className="transfer-header-sub">Please transfer the total amount of <span><strong>${bookingData.price}</strong></span> to the below account!</p>

                    <div className="company-account">
                        <p><strong>Account Number:</strong> 8102770927</p>
                        <p><strong>Bank:</strong> Palmpay</p>
                        <p><strong>Account Name:</strong> Victoria Okorie</p>
                    </div>

                    <p className="paid-paragraph">After a successful transfer, click the <strong>"Paid"</strong> button.</p>


                    <button 
                    className="paid-btn"
                    onClick={onConfirm}
                    >
                        {isLoading ? "Processing..." : "Paid"}
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Modal;