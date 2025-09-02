import React, { useState, useEffect } from 'react';

function Timer() {
    // Calculate initial deadline (3 days from now)
    const getDeadline = () => {
        const deadline = new Date();
        deadline.setDate(deadline.getDate() + 3);
        return deadline.getTime();
    };

    const [deadline, setDeadline] = useState(getDeadline());
    const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 0, minutes: 0, seconds: 0 });

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = deadline - now;

        if (difference <= 0) {
            // Reset deadline to 3 days from now
            const newDeadline = getDeadline();
            setDeadline(newDeadline);
            return {
                days: 3,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Cleanup on unmount
    }, [deadline]);

    return (
        <div className="fixed top-16 left-0 w-full bg-white text-gray-800 py-4 px-8 sm:px-6 shadow-lg z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-blue-600">
                        Course Discount Ends Soon!
                    </span>
                    <div className="flex space-x-2 sm:space-x-3">
                        <div className="bg-gray-100 text-blue-700 rounded-lg px-2 py-1 sm:px-3 sm:py-2 text-center min-w-[50px] sm:min-w-[60px]">
                            <span className="text-lg sm:text-xl font-bold">{timeLeft.days}</span>
                            <p className="text-xs sm:text-sm">Days</p>
                        </div>
                        <div className="bg-gray-100 text-blue-700 rounded-lg px-2 py-1 sm:px-3 sm:py-2 text-center min-w-[50px] sm:min-w-[60px]">
                            <span className="text-lg sm:text-xl font-bold">{timeLeft.hours}</span>
                            <p className="text-xs sm:text-sm">Hours</p>
                        </div>
                        <div className="bg-gray-100 text-blue-700 rounded-lg px-2 py-1 sm:px-3 sm:py-2 text-center min-w-[50px] sm:min-w-[60px]">
                            <span className="text-lg sm:text-xl font-bold">{timeLeft.minutes}</span>
                            <p className="text-xs sm:text-sm">Minutes</p>
                        </div>
                        <div className="bg-gray-100 text-blue-700 rounded-lg px-2 py-1 sm:px-3 sm:py-2 text-center min-w-[50px] sm:min-w-[60px]">
                            <span className="text-lg sm:text-xl font-bold">{timeLeft.seconds}</span>
                            <p className="text-xs sm:text-sm">Seconds</p>
                        </div>
                    </div>
                </div>
                <a
                    href="/contact" // Adjust to your contact form page
                    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-full hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition duration-300 shadow-md text-sm sm:text-base"
                >
                    Submit Contact Now
                </a>
            </div>
        </div>
    );
}

export default Timer;