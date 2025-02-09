import React, { useState } from "react";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        description: "",
    });

    console.log(formData);
  return (
    <div className="form-items">
      <div className="form-desc">
        <label>Name :</label>
        <input 
            placeholder="Enter your name"
            value={formData.name}
            className="form-control"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
      </div>

      <div className="form-desc">
        <label>Email : </label>
        <input
        placeholder="Enter your email address"
        value={formData.email}
        type="email"
        className="form-control"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
         />
      </div>

      <div className="form-desc">
        <label>Description :</label>
        <textarea 
        placeholder="Enter Enquiry Text"
        value={formData.description}
        rows="6"
        className="form-control"
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>

      <button>Submit</button>
    </div>
  );
};

export default ContactForm;
