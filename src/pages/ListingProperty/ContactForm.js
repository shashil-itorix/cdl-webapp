import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      description: "",
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.description) {
      toast.warning("Please enter all fields")
      return
    }
  }

  return (
    <div className="form-items">
      <h3 style={{ fontWeight: 600, fontStyle: "italic"}} className="mb-4 underlineText">Have a query? Raise an enquiry.</h3>
      <div className="form-desc">
        <label>Name : <span className="text-danger">*</span> </label>
        <input 
            placeholder="Enter your name"
            value={formData.name}
            className="form-control"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
      </div>

      <div className="form-desc">
        <label>Email : <span className="text-danger">*</span> </label>
        <input
        placeholder="Enter your email address"
        value={formData.email}
        type="email"
        className="form-control"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
         />
      </div>

      <div className="form-desc">
        <label>Description :  <span className="text-danger">*</span> </label>
        <textarea 
        placeholder="Enter Enquiry Text"
        value={formData.description}
        rows="6"
        className="form-control"
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ContactForm;
