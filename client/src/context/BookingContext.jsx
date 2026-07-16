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
    const [bookingData, setBookingData] = useState(initialBookingData);

    // Load booking from localStorage
    useEffect(() => {
        const savedBooking = localStorage.getItem("vip-bookings");

        if (savedBooking) {
            try {
                setBookingData(JSON.parse(savedBooking));
            } catch (error) {
                console.error("Error loading booking:", error);
            }
        }
    }, []);

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