// src/components/BookingForm.jsx
"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import { saveBooking } from "@/app/actions"; // Import our new server action

const TREK_DATA = {
  "Nag Tibba Trek": {
    days: 3, price: { original: 19999, offer: 14999 },
    pickups: [{ value: "Uttarkashi", label: "Uttarkashi (Included)", cost: 0 },{ value: "Dehradun", label: "Dehradun (+₹5,000)", cost: 5000 }],
    addons: [{ value: "Horse for Bags", label: "Horse for Bags (+₹5,000)", cost: 5000 },{ value: "Horse for Person", label: "Horse Ride for Person (+₹7,000)", cost: 7000 },{ value: "Birthata", label: "Birthata Extension (+₹2,000)", cost: 2000 },{ value: "Devalsari", label: "Devalsari Extension (+₹1,500)", cost: 1500 }],
  },
  "Gangotri Trek": {
    days: 4, price: { original: 15000, offer: 11999 },
    pickups: [{ value: "Uttarkashi", label: "Uttarkashi (Included)", cost: 0 }],
    addons: [{ value: "Tapovan", label: "Tapovan Extension (+₹4,000)", cost: 4000 },{ value: "Bhojwasa", label: "Bhojwasa Extension (+₹3,000)", cost: 3000 },{ value: "Harshil Valley", label: "Harshil Valley Visit (+₹2,500)", cost: 2500 }],
  },
};

const formatCurrency = (amount) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);

export default function BookingForm() {
  const [formData, setFormData] = useState({ trek: "", pickup: "", addons: [], date: null, people: 1, group: "", name: "", email: "", phone: "" });
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const selectedTrekData = useMemo(() => TREK_DATA[formData.trek] || null, [formData.trek]);

  const { totalCost, endDate } = useMemo(() => {
    if (!selectedTrekData) return { totalCost: 0, endDate: null };
    let total = selectedTrekData.price.offer * formData.people;
    const pickupData = selectedTrekData.pickups.find(p => p.value === formData.pickup);
    if (pickupData) total += pickupData.cost;
    formData.addons.forEach(val => {
      const addonData = selectedTrekData.addons.find(a => a.value === val);
      if (addonData) total += addonData.cost;
    });
    let end = formData.date ? new Date(formData.date) : null;
    if (end) end.setDate(end.getDate() + selectedTrekData.days - 1);
    return { totalCost: total, endDate: end };
  }, [formData, selectedTrekData]);

  const jsonLd = useMemo(() => { /* ... jsonLd logic ... */ }, [selectedTrekData, formData.trek]);
  
  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleAddonChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({ ...prev, addons: checked ? [...prev.addons, value] : prev.addons.filter(a => a !== value) }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!agree) {
      alert("Please accept the Terms & Conditions and Privacy Policy.");
      return;
    }
    setIsSubmitting(true);
    setFormMessage("");

    const formElement = event.currentTarget;
    const formDataForAction = new FormData(formElement);
    formDataForAction.append("addons", JSON.stringify(formData.addons));
    formDataForAction.append("totalCost", formatCurrency(totalCost));
    formDataForAction.append("date", formData.date ? formData.date.toISOString().split('T')[0] : "");
    
    const result = await saveBooking(formDataForAction);

    if (result.success) {
      setSubmitted(true);
    } else {
      setFormMessage(result.message || "An unknown error occurred.");
    }
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <section className="relative z-20 w-full py-20 text-white text-center">
        <motion.h2 initial={{opacity: 0}} animate={{opacity: 1}} className="text-3xl font-bold text-amber-400">
          Thank You for Your Booking Request!
        </motion.h2>
        <motion.p initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.5}}} className="mt-4 text-slate-300 max-w-2xl mx-auto">
          We have received your submission and will contact you shortly to confirm the details.
        </motion.p>
      </section>
    );
  }

  return (
    <section id="booking" className="relative z-20 w-full py-20 text-white">
      {/* ... jsonld script and headings ... */}
      <div className="max-w-3xl mx-auto px-4">
        {/* ... motion h2 and p tags ... */}
        <form onSubmit={handleFormSubmit} className="grid gap-6 bg-black/50 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-lg">
          <select name="trek" value={formData.trek} onChange={handleChange} className="bg-slate-800 text-slate-100 p-3 rounded w-full" required>
            <option value="">Select Trek</option>
            {Object.keys(TREK_DATA).map(trekName => (<option key={trekName} value={trekName}>{trekName}</option>))}
          </select>
          {selectedTrekData && (
            <>
              <div className="bg-slate-900 p-4 rounded text-center">
                <p className="text-lg font-semibold text-slate-200">Price per person:</p>
                <p className="text-2xl font-bold text-amber-400">
                  <span className="line-through text-slate-400 mr-2">{formatCurrency(selectedTrekData.price.original)}</span>
                  <span>{formatCurrency(selectedTrekData.price.offer)}</span>
                </p>
                <p className="text-sm text-green-400 mt-1">🎉 Limited Launch Offer!</p>
              </div>
              <select name="pickup" value={formData.pickup} onChange={handleChange} className="bg-slate-800 text-slate-100 p-3 rounded w-full" required>
                  <option value="">Select Pickup Location</option>
                  {selectedTrekData.pickups.map(loc => (<option key={loc.value} value={loc.value}>{loc.label}</option>))}
              </select>
              <div>
                <p className="text-slate-300 mb-2 font-semibold">Optional Add-ons:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedTrekData.addons.map(addon => (
                    <label key={addon.value} className="flex items-center gap-2 bg-slate-700 p-2 rounded cursor-pointer hover:bg-slate-600 transition">
                      <input type="checkbox" name="addons-checkbox" value={addon.value} checked={formData.addons.includes(addon.value)} onChange={handleAddonChange} className="accent-amber-500 w-4 h-4" />
                      {addon.label}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-slate-300 mb-2 font-semibold">Select Start Date:</p>
                <DatePicker selected={formData.date} onChange={(date) => setFormData(prev => ({ ...prev, date }))} minDate={new Date()} placeholderText="Click to Choose a Date" className="bg-slate-800 text-slate-100 p-3 rounded w-full cursor-pointer" required />
                {endDate && (<p className="mt-2 text-slate-400">Duration: <span className="text-amber-400">{formData.date?.toLocaleDateString()} to {endDate.toLocaleDateString()}</span></p>)}
              </div>
              <input type="number" name="people" min="1" max="10" value={formData.people} onChange={handleChange} className="bg-slate-800 text-slate-100 p-3 rounded" placeholder="Number of People" required/>
              <select name="group" value={formData.group} onChange={handleChange} className="bg-slate-800 text-slate-100 p-3 rounded" required>
                  <option value="">Select Group Type</option>
                  <option value="Family">Family</option><option value="Couples">Couples</option><option value="Friends">Friends</option><option value="Corporate">Corporate</option>
              </select>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="bg-slate-800 text-slate-100 p-3 rounded" placeholder="Full Name" required autoComplete="name" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="bg-slate-800 text-slate-100 p-3 rounded" placeholder="Email Address" required autoComplete="email" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="bg-slate-800 text-slate-100 p-3 rounded" placeholder="Phone Number" required autoComplete="tel" />
              <div className="bg-slate-900 p-4 rounded text-center">
                  <p className="text-lg font-semibold text-slate-200">Estimated Total:</p>
                  <p className="text-3xl font-bold text-green-400">{formatCurrency(totalCost)}</p>
              </div>
              <label className="flex items-center gap-2 text-slate-300 text-sm">
                <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="accent-amber-500 w-4 h-4" required />
                I agree to the <Link href="/terms" className="underline hover:text-amber-400">Terms & Conditions</Link> and <Link href="/privacy-policy" className="underline hover:text-amber-400">Privacy Policy</Link>.
              </label>
              <button type="submit" disabled={!agree || isSubmitting} className={`${agree && !isSubmitting ? "bg-amber-500 hover:bg-amber-600" : "bg-slate-600 cursor-not-allowed"} text-black font-semibold py-3 px-6 rounded shadow-lg transition text-lg`}>
                {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
              </button>
              {formMessage && <p className="text-red-500 text-center mt-2">{formMessage}</p>}
            </>
          )}
        </form>
      </div>
    </section>
  );
}