import { Link } from "react-router-dom";

const Loginform = () => {
  return (
    <form action="#">
      <div className="grid grid-cols gap-5 mb-3">
        <input type="email" placeholder="Enter Your Email" className="border border-gray-400 py-1 px-2"/>
      </div>
      <div className="grid grid-cols gap-5 mb-3">
        <input type="password" placeholder="Enter Your Password" className="border border-gray-400 py-1 px-2"/>
      </div>
      <div className="mt-5">
        <input type="checkbox" name="checkbok" id="checkbox" /><span>I accept the <a href="#" className=" text-green-600">Term of Use</a> & <a href="#" className=" text-green-600">Privecy Policy</a></span>
      </div>
      <div>
      <Link to="/sidebar"><button className="w-full bg-green-600 text-white py-3 text-center">Login</button></Link>
      </div>
      <div className="flex justify-between">
      <div>
        <a href="#"><h4 className="my-3 text-green-600">Sign Up</h4></a>
      </div>
      <div>
        <a href="#"><h4 className="my-3 text-green-600">Forget Password?</h4></a>
      </div>
      </div>
      
    </form>
  )
}

export default Loginform;