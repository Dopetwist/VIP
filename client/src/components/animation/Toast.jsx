import { useEffect, useState } from "react";

function Toast({ message, type = "success", onClose }) {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            // Wait for exit animation to complete before calling onClose
            const exitTimer = setTimeout(onClose, 300);
            return () => clearTimeout(exitTimer);
        }, 3000); // auto close after 3s

        // clean-up function
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="toast-container">
            <div className={`toast ${type} ${isExiting ? "toast-exit" : ""}`}>
                <p id="toast-text">{message}</p>
            </div>
        </div>
    );
}

export default Toast;