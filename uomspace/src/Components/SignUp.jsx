import SignUpForm from "./SignUpForm";
import { FaBookOpen } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-light-white">
      <div className="w-8/12 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-[url('images/UOM.jpeg')] bg-cover bg-no-repeat bg-center">
        <h1 className="text-white font-black text-5xl mb-2 flex gap-1">Welcome<FaBookOpen className="text-green-600" /></h1>
            <div className="text-white text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facere illum nisi corporis accusamus alias error itaque! Fugiat tenetur quaerat tempora aliquid ullam alias eligendi cum ea, commodi possimus consequuntur?
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
              <h1 className="text-4xl text-green-600 mb-4">Register</h1>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet.</p>
              < SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};


export default SignUp
