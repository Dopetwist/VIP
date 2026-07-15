
function Step5Info({ data, updateBooking }) {

  const handleChange = (e) => {
    const { name, value } = e.target;

    updateBooking({
      info: {
        ...data.info,
        [name]: value
      }
    });
  }

  return (
    <div>
      <div className="info-container">

        <h2>Your Information</h2>

        <form>
          <div className="input-box">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              name="fullName" 
              id="name" 
              value={data.info?.fullName || ""}
              onChange={handleChange}
              placeholder="Enter first and last names" 
            />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={data.info?.email || ""}
              onChange={handleChange}
              placeholder="your.email@example.com" 
            />
          </div>
          <div className="input-box">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              id="phone" 
              value={data.info?.phone || ""}
              onChange={handleChange} 
              placeholder="+234 123 456 7890" 
            />
          </div>
          <div className="input-box">
            <label htmlFor="address">Address</label>
            <input 
              type="text" 
              name="address" 
              id="address" 
              value={data.info?.address || ""}
              onChange={handleChange} 
              placeholder="59 Agbebi Street, Surulere" 
            />
          </div>
        </form>

      </div>
    </div>
  )
}

export default Step5Info;