
function Step6Review({ data }) {

  // Format date from YYYY-MM-DD format
  const formatDateForDisplay = (dateString) => {
    if (!dateString) return 'Not selected';
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formattedDateTime = data.date && data.time 
    ? `${formatDateForDisplay(data.date)} at ${data.time}`
    : 'Not selected';

  return (
    <div className="review-section">
      <h2>Confirm your Booking</h2>

      <div className="review-container">
        <div className="review-box">
          <span>Service</span>
          <p className="main-text">{data.service}</p>
        </div>
        <div className="review-box">
          <span>Date & Time</span>
          <p className="main-text">{formattedDateTime}</p>
        </div>
        <div className="review-box">
          <span>Contact</span>
          <p className="main-text full-name">{data.info.fullName}</p>
          <p className="sub-text">{data.info.email}</p>
          <p className="sub-text">{data.info.phone}</p>
        </div>

        <div className="review-total">
          <div className="review-total-box">
            <h3>Total</h3>
            <p>${data.price}</p>
          </div>
          
          <p>Payment will be collected at the studio</p>
        </div>
      </div>
    </div>
  )
}

export default Step6Review;