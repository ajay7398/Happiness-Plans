import React, { useState } from 'react'

function Form() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState(null);
    const [message,setMessage]=useState("");

    const handleForm=(e)=>{
          e.preventDefault();
          setMessage("");
          setEmail("");
          setName("");
          setPhone("");
          alert("Thank you for reaching out! We'll get back soon.");
        
    }
  return (
    <div>
      <form
        onSubmit={handleForm}
        className="max-w-md mx-auto space-y-4"
      >
        <input
        value={name}
          type="text"
          placeholder="Your Name"
          required
          onChange={(e)=>setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
          type="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
          type="tel"
          placeholder="Your Phone"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <textarea
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
          placeholder="Your Message"
          required
          className="w-full p-3 border border-gray-300 rounded h-28 resize-none"
        />
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded hover:bg-teal-700 transition font-semibold"
        >
          Send Message
        </button>
      </form>

    </div>
  )
}

export default Form
