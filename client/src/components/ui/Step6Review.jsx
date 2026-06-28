
function Step6Review({ data }) {

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
          <p className="main-text">{`${data.date} ${data.time}`}</p>
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
            <p>$85</p>
          </div>
          
          <p>Payment will be collected at the studio</p>
        </div>
      </div>
    </div>
  )
}

export default Step6Review;