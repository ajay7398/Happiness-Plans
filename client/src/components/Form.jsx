import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true); 

    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setLoading(false); 
      alert("Thank you for reaching out! We'll get back soon.");
    }, 2000); 
  };

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
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          value={email}
          type="email"
          placeholder="Your Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          value={phone}
          type="tel"
          placeholder="Your Phone"
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded"
        />
        <textarea
          value={message}
          placeholder="Your Message"
          required
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded h-28 resize-none"
        />
        <button
          type="submit"
          disabled={loading} // ✅ disable if loading
          className={`w-full py-3 rounded font-semibold transition ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-teal-600 text-white hover:bg-teal-700'
          }`}
        >
          {loading ? 'Sending...' : 'Send Message'} {/* ✅ loading text */}
        </button>
      </form>
    </div>
  );
}

export default Form;
