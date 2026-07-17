import { createContext, useContext, useEffect, useState, useCallback } from "react";

const BookingContext = createContext();

const initialBookingData = {
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
};

export function BookingProvider({ children }) {

    // Initialize state directly from localStorage to prevent page refresh reset
    const [bookingData, setBookingData] = useState(() => {
        try {
            const savedBooking = localStorage.getItem("vip-bookings");

            return savedBooking
                ? JSON.parse(savedBooking)
                : initialBookingData;
        } catch (error) {
            console.error("Error loading booking:", error);
            return initialBookingData;
        }
    });

    // Persist booking whenever it changes
    useEffect(() => {
        localStorage.setItem(
            "vip-bookings",
            JSON.stringify(bookingData)
        );
    }, [bookingData]);

    const clearBooking = useCallback(() => {
        localStorage.removeItem("vip-bookings");
        setBookingData(initialBookingData);
    }, []);

    return (
        <BookingContext.Provider
            value={{
                bookingData,
                setBookingData,
                clearBooking,
                initialBookingData
            }}
        >
            {children}
        </BookingContext.Provider>
    );
}

export function useBooking() {
    return useContext(BookingContext);
}