import React from 'react'

export default function TravelReasons() {
  return (
    <div className="flex items-center flex-col justify-center">
      <p>Travel Reasons</p>
      <div className="flex mt-2">
        <label className="inline-flex items-center mr-2">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            name="accountType"
            value="personal"
          />
          <span className="ml-2 text-gray-700">Personal</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-indigo-600"
            name="accountType"
            value="business"
          />
          <span className="ml-2 text-gray-700">Business</span>
        </label>
      </div>
      <div>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-indigo-600"
            required
          />
          <span className="ml-2 text-gray-700">I accept the terms and conditions</span>
        </label>
      </div>
    </div>
  );
}
