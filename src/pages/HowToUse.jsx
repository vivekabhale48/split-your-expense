import React from 'react';
import { Link } from 'react-router-dom';

const HowToUsePage = () => {
  return (
    <div className="min-h-screen bg-[#080f1f] text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-center mb-6">How to Use Our App</h1>
        <p className="text-gray-300 text-center mb-8">
          Follow these simple steps to get started with splitting expenses and managing your bills effortlessly.
        </p>

        {/* Steps Section */}
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex justify-center items-center text-xl font-bold">
                1
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Create a New Bill</h2>
              <p className="text-gray-400">
                Start by entering all the necessary details such as bill name, members involved, and their respective expenses.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex justify-center items-center text-xl font-bold">
                2
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Calculate the Split</h2>
              <p className="text-gray-400">
                Use the "Calculate" button to process the data and determine how much each person owes or is owed.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex justify-center items-center text-xl font-bold">
                3
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Share the Results</h2>
              <p className="text-gray-400">
                Generate a unique link to share the calculated results with your friends or family members.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex justify-center items-center text-xl font-bold">
                4
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Track Expenses</h2>
              <p className="text-gray-400">
                Keep a record of all your bills and expenses in the app for easy tracking and reference.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <p className="text-gray-300">Ready to get started?</p>
          <div className='mx-auto w-fit mt-4 bg-green-500 hover:bg-green-600 transition py-2 px-6 rounded-md font-semibold text-white'>
            <Link to={'/'} className="">
                Create Your First Bill
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUsePage;
