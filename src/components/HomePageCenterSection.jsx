import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTheMembers } from '../store/slice/HomeSlice';
import { useNavigate } from 'react-router-dom';

export const HomePageCenterSection = () => {
    const [groupSize, setGroupSize] = useState(3);
    const [tripName, setTripName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleSubmit() {
        const tripDetails = {
            'groupName': tripName,
            'totalMembers': groupSize,
            'allMembersTotalExpense': 0,
            'sharePerPerson': 0
        }
        dispatch(addTheMembers(tripDetails));
        navigate('/bill-page-section');
    }

    return (
        <div className="bg-[#D4F5F5] shadow-lg rounded-lg p-6 max-w-sm w-full">
            <h1 className="text-center text-lg font-bold text-licorice mb-4">
                Start New Calculation
            </h1>
            <div className="mb-4">
                <label
                    className="text-center block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="group-size"
                >
                    How many people are in your group?
                </label>
                <div className="flex items-center justify-center space-x-3">
                    <button
                        onClick={() => setGroupSize((prev) => (prev > 2 ? prev - 1 : 2))}
                        className="bg-[#93B7BE] text-black font-bold w-7 h-7 flex justify-center items-center rounded-full hover:bg-[#3B6F78] transition"
                    >
                        -
                    </button>
                    <input
                        value={groupSize}
                        onChange={(e) => setGroupSize(e.target.value)}
                        type="number"
                        className="text-lg font-bold w-[45px] text-center outline-none border rounded-md focus:outline-none focus:ring-2 focus:ring-light-blue"
                    />
                    <button
                        onClick={() => setGroupSize((prev) => prev + 1)}
                        className="bg-[#93B7BE] text-black font-bold w-7 h-7 flex justify-center items-center rounded-full hover:bg-[#3B6F78] transition"
                    >
                        +
                    </button>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                    People can be excluded from single expenses later
                </p>
            </div>
            <div className="mb-6">
                <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="name"
                >
                    Give it a name!
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="e.g. Roadtrip"
                    value={tripName}
                    onKeyUp={(e) => {
                        if(e.key === 'Enter') {
                            handleSubmit();
                        }
                    }}
                    onChange={(e) => setTripName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-light-blue"
                />
            </div>
            <button
            onClick={handleSubmit} 
            disabled={tripName.length > 0 ? false : true}
            className={tripName.length > 0 ? 'bg-green-500 text-white w-full py-2 rounded-md font-bold hover:bg-green-600 transition' : 'bg-green-300 text-white w-full py-2 rounded-md font-bold transition cursor-not-allowed'}>
                Go!
            </button>
        </div>
    )
}