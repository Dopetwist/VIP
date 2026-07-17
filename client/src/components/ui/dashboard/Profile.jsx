import { useState } from "react";
import { useBooking } from "../../../context/BookingContext";

export default function Profile() {

    const { bookingData } = useBooking();

    const initialProfile = {
        fullName: bookingData.info?.fullName || "Sarah Victor",
        email: bookingData.info?.email || "sarah@example.com",
        phone: bookingData.info?.phone || "+234 123 456 7890",
        address: bookingData.info?.address || "59 Agbebi Street, Surulere, Lagos",
        membership: "Gold Member",
    };

    const [profile, setProfile] = useState(initialProfile);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProfile((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsEditing(false);
    };

    return (
        <div className="panel-card profile-panel">
            <div className="panel-header">
                <div>
                    <p className="section-eyebrow">Account</p>
                    <h2>Profile</h2>
                </div>
                <button type="button" className="secondary-button" onClick={() => setIsEditing((current) => !current)}>
                    {isEditing ? "Cancel" : "Edit Profile"}
                </button>
            </div>

            {!isEditing ? (
                <div className="profile-details">
                    <div className="profile-summary-card">
                        <h3>Personal details</h3>
                        <p><strong>Name:</strong> {profile.fullName}</p>
                        <p><strong>Email:</strong> {profile.email}</p>
                        <p><strong>Phone:</strong> {profile.phone}</p>
                        <p><strong>Address:</strong> {profile.address}</p>
                    </div>
                    <div className="profile-summary-card">
                        <h3>Membership</h3>
                        <p>{profile.membership}</p>
                        <p>Enjoy priority bookings, exclusive offers, and tailored beauty recommendations.</p>
                    </div>
                </div>
            ) : (
                <form className="profile-form" onSubmit={handleSubmit}>
                    <label>
                        Full Name
                        <input type="text" name="fullName" value={profile.fullName} onChange={handleChange} />
                    </label>
                    <label>
                        Email
                        <input type="email" name="email" value={profile.email} onChange={handleChange} />
                    </label>
                    <label>
                        Phone
                        <input type="text" name="phone" value={profile.phone} onChange={handleChange} />
                    </label>
                    <label>
                        Address
                        <input type="text" name="address" value={profile.address} onChange={handleChange} />
                    </label>
                    <div className="form-actions">
                        <button type="button" className="secondary-button" onClick={() => setIsEditing(false)}>
                            Cancel
                        </button>
                        <button type="submit" className="primary-button">
                            Save Changes
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}