export default function Page() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            {/*<div className="bg-black rounded-2xl shadow-lg p-6 w-80 text-center hover:shadow-xl transition-shadow">*/}
            <div className="bg-black rounded-2xl shadow-lg p-6 w-80 text-center hover:scale-105 transition-transform">
            <img
                    src="https://via.placeholder.com/100"
                    alt="Profile"
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
                />
                <h2 className="text-xl font-semibold text-white-800">Pavan Fernando</h2>
                <p className="text-white-500">Software Engineer</p>
                <p className="text-white-600 mt-3 text-sm">
                    Passionate about web apps, backend systems, and clean UI design.
                </p>
                <button className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                    Follow
                </button>
            </div>
        </div>
    );
}
