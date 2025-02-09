import React, { useState } from "react";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    console.log(formData);
  return (
    <div className="form-items">
      <div className="form-desc">
        <label>Name :</label>
        <input 
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
/>
      </div>

      <div className="form-desc">
        <label>Email : </label>
        <input
        placeholder="Enter your email address"
        value={formData.email}
        type="email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
         />
      </div>

      <div className="form-desc">
        <label>Message :</label>
        <textarea 
        placeholder="Enter your massage"
        value={formData.message}
        rows="8"
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button>Submit</button>
    </div>
  );
};

export default ContactForm;
