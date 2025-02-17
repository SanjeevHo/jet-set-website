import React, { useState } from 'react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleFocus = (field) => {
    setFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocused(prev => ({ ...prev, [field]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200 flex items-center justify-center p-6">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 w-full max-w-md shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Looking For More Options?
          </h2>
          <p className="text-gray-600">
            Allow Our Charter Experts to get in touch with you
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative transform transition-all duration-300 ease-in-out">
            <input
              type="text"
              id="name"
              className={`peer w-full px-4 py-3 border-2 rounded-lg outline-none transition-all duration-300
                ${focused.name ? 'border-orange-400' : 'border-gray-200'}
                focus:border-orange-400`}
              placeholder=" "
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
            />
            <label
              htmlFor="name"
              className={`absolute left-4 pointer-events-none transform transition-all duration-300
                ${focused.name || formState.name ? '-translate-y-7 text-sm text-orange-400 bg-white px-1' : 'translate-y-3 text-gray-500'}`}
            >
              Full Name
            </label>
          </div>

          <div className="relative transform transition-all duration-300 ease-in-out">
            <input
              type="email"
              id="email"
              className={`peer w-full px-4 py-3 border-2 rounded-lg outline-none transition-all duration-300
                ${focused.email ? 'border-orange-400' : 'border-gray-200'}
                focus:border-orange-400`}
              placeholder=" "
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
            />
            <label
              htmlFor="email"
              className={`absolute left-4 pointer-events-none transform transition-all duration-300
                ${focused.email || formState.email ? '-translate-y-7 text-sm text-orange-400 bg-white px-1' : 'translate-y-3 text-gray-500'}`}
            >
              Email
            </label>
          </div>

          <div className="relative transform transition-all duration-300 ease-in-out">
            <textarea
              id="message"
              rows="4"
              className={`peer w-full px-4 py-3 border-2 rounded-lg outline-none transition-all duration-300
                ${focused.message ? 'border-orange-400' : 'border-gray-200'}
                focus:border-orange-400`}
              placeholder=" "
              onFocus={() => handleFocus('message')}
              onBlur={() => handleBlur('message')}
            />
            <label
              htmlFor="message"
              className={`absolute left-4 pointer-events-none transform transition-all duration-300
                ${focused.message || formState.message ? '-translate-y-7 text-sm text-orange-400 bg-white px-1' : 'translate-y-3 text-gray-500'}`}
            >
              Your message here
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 text-white font-medium rounded-lg 
              bg-gradient-to-r from-orange-500 to-pink-500 
              transform transition-all duration-300 
              hover:from-orange-600 hover:to-pink-600 
              hover:scale-[1.02] hover:shadow-lg 
              active:scale-[0.98]"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;