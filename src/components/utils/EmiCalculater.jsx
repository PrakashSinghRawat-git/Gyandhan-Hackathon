import { useState } from "react";

const EMICalculator = () => {
    const [loanAmount, setLoanAmount] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [loanTerm, setLoanTerm] = useState("");
    const [emi, setEMI] = useState("");
    const [totalInterest, setTotalInterest] = useState("");
    const [totalPayment, setTotalPayment] = useState("");

    const calculateEMI = () => {
        const P = parseFloat(loanAmount);
        const R = parseFloat(interestRate) / (12 * 100);
        const N = parseFloat(loanTerm);

        if (!isNaN(P) && !isNaN(R) && !isNaN(N)) {
            const E = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
            setEMI(formatNumber(E.toFixed(2)));

            const totalInt = (E * N - P).toFixed(2);
            setTotalInterest(formatNumber(totalInt));

            const totalPay = (E * N).toFixed(2);
            setTotalPayment(formatNumber(totalPay));
        }
    };

    const formatNumber = (number) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2,
        }).format(number);
    };

    return (
        <div className="bg-slate-100 p-4 py-16">
            <div className="max-w-md mx-auto p-6 w-full rounded-md shadow-md bg-slate-300">
                <h1 className="text-2xl font-bold mb-4">EMI Calculator</h1>
                <div className="mb-4">
                    <label htmlFor="loanAmount" className="block font-bold mb-2">
                        Loan Amount (₹)
                    </label>
                    <input
                        type="text"
                        id="loanAmount"
                        className="w-full p-2 border border-gray-400 rounded-md"
                        placeholder="Enter loan amount"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="interestRate" className="block font-bold mb-2">
                        Interest Rate (% p.a.)
                    </label>
                    <input
                        type="text"
                        id="interestRate"
                        className="w-full p-2 border border-gray-400 rounded-md"
                        placeholder="Enter interest rate"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="loanTerm" className="block font-bold mb-2">
                        Loan Term (months)
                    </label>
                    <input
                        type="text"
                        id="loanTerm"
                        className="w-full p-2 border border-gray-400 rounded-md"
                        placeholder="Enter loan term"
                        value={loanTerm}
                        onChange={(e) => setLoanTerm(e.target.value)}
                    />
                </div>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
                    onClick={calculateEMI}
                >
                    Calculate EMI
                </button>
                {emi && (
                    <div className="mt-4">
                        <h2 className="text-xl font-bold mb-2">EMI</h2>
                        <p className="text-gray-700 font-bold text-2xl">
                            {emi}/month
                        </p>
                    </div>
                )}
                {totalInterest && (
                    <div className="mt-4">
                        <h2 className="text-xl font-bold mb-2">
                            Total Interest Payable
                        </h2>
                        <p className="text-gray-700 font-bold text-2xl">
                            {totalInterest}
                        </p>
                    </div>
                )}
                {totalPayment && (
                    <div className="mt-4">
                        <h2 className="text-xl font-bold mb-2">
                            Total Payment (Principal + Interest)
                        </h2>
                        <p className="text-gray-700 font-bold text-2xl">
                            {totalPayment}
                        </p>
                    </div>
                )}
            </div>
        </div>

    );
};

export default EMICalculator;

