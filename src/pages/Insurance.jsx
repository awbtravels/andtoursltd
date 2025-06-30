// src/pages/Insurance.jsx import React, { useState } from "react"; import emailjs from "@emailjs/browser";

export default function Insurance() { const [formData, setFormData] = useState({ first_name: "", middle_name: "", last_name: "", dob: "", passport_number: "", nationality: "", address: "", city: "", state: "", zipcode: "", destination_country: "", start_date: "", end_date: "", user_email: "", phone_number: "", insurance_type: "", });

const insurancePrices = { "Travel Insurance": 30000, "Student Insurance": 50000, "Medical Insurance": 100000, "Car Insurance": 20000, "Business Insurance": 50000, };

const handleChange = (e) => { const { name, value } = e.target; setFormData({ ...formData, [name]: value }); };

const handlePayment = () => { const { user_email, phone_number, insurance_type } = formData; const amount = insurancePrices[insurance_type] * 100;

const handler = window.PaystackPop.setup({
  key: "pk_live_0e2a65ed46c1518a031836f1b237091d8e9be2ba",
  email: user_email,
  amount,
  currency: "NGN",
  ref: "AWBINS" + Math.floor(Math.random() * 1000000000),
  callback: function (response) {
    sendConfirmation();
    alert("Payment complete! Reference: " + response.reference);
  },
  onClose: function () {
    alert("Payment was not completed. Please try again.");
  },
});
handler.openIframe();

};

const sendConfirmation = () => { emailjs .send("service_uf2f20j", "template_sj40zal", formData, "NA4gg71pG4pUPkyr3") .then( (res) => console.log("Email sent successfully!", res.status), (err) => console.error("Email failed:", err) ); };

return ( <div className="max-w-4xl mx-auto p-6 text-charcoal"> <h1 className="text-2xl font-bold mb-2 text-red-700"> AWB Travels and Tours RC: 7177769 </h1> <h2 className="text-lg mb-4">....fulfilling your dream life</h2> <p className="mb-6 text-lg font-semibold text-red-600"> Insurance Booking Form (Secure Online Payment) </p>

<form className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      "first_name",
      "middle_name",
      "last_name",
      "dob",
      "passport_number",
      "nationality",
      "address",
      "city",
      "state",
      "zipcode",
      "destination_country",
      "start_date",
      "end_date",
      "user_email",
      "phone_number",
    ].map((field) => (
      <input
        key={field}
        type={field.includes("date") ? "date" : field.includes("email") ? "email" : "text"}
        name={field}
        value={formData[field]}
        onChange={handleChange}
        placeholder={
          field
            .replace(/_/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase()) +
          (field !== "middle_name" ? " *" : "")
        }
        required={field !== "middle_name"}
        className="p-2 border border-gray-300 rounded-md"
      />
    ))}

    <select
      name="insurance_type"
      value={formData.insurance_type}
      onChange={handleChange}
      required
      className="p-2 border border-gray-300 rounded-md"
    >
      <option value="">Select Insurance Type *</option>
      {Object.keys(insurancePrices).map((type) => (
        <option key={type} value={type}>
          {type} - ₦{insurancePrices[type].toLocaleString()}
        </option>
      ))}
    </select>

    <div className="md:col-span-2 mt-4">
      <button
        type="button"
        onClick={handlePayment}
        className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800"
      >
        Pay & Confirm Insurance
      </button>
    </div>
  </form>
</div>

); }
