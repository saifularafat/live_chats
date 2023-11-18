import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";

const Navber = () => {
    return (
        <div className="flex items-center justify-between bg-slate-800 py-3 px-3">
            <h3 className="text-xl font-semibold text-white">Live<span className="text-orange-600">Chat</span> </h3>
            <div className="flex items-center gap-1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQUXqMrzrmkxd3QpxGL5bzgxELsztrL1AgQ&usqp=CAU" alt="photo" className="w-9 h-9 object-cover border-[2px] border-orange-600 rounded-full" />
                <p className="text-sm font-medium text-white">Name</p>
                <button
                    onClick={() => signOut(auth)}
                    className="py-1 px-2 text-sm bg-gray-700 text-white rounded-lg hover:bg-transparent border-gray-600 border-[2px] hover:border-orange-600 hover:text-orange-600 transition-all duration-200">
                    logout
                </button>
            </div>
        </div>
    );
};

export default Navber;