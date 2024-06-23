const SignUpForm = () => {
  return (
    <form action="#">
      <div className="grid grid-cols-2 gap-5">
        <input type="text" placeholder="Enter Your Name" className="border border-gray-400 py-1 px-2"/>
        <input type="text" placeholder="Enter Your F. Name" className="border border-gray-400 py-1 px-2"/>
        <input type="email" placeholder="Enter Your Email" className="border border-gray-400 py-1 px-2"/>
        <input type="date" placeholder="Date-of-Birth" id="dob" className="border border-gray-400 py-1 px-2"/>
        <input type="text" placeholder="Department" className="border border-gray-400 py-1 px-2"/>
        <input type="date" placeholder="Session" className="border border-gray-400 py-1 px-2"/>
        <input type="number" placeholder="Enrollment Id" className="border border-gray-400 py-1 px-2"/>
        <input type="password" placeholder="Enter Your Password" className="border border-gray-400 py-1 px-2"/>
      </div>
      <div className="mt-5">
        <input type="checkbox" name="checkbok" id="checkbox" /><span>I accept the <a href="#" className=" text-green-600">Term of Use</a> & <a href="#" className=" text-green-600">Privecy Policy</a></span>
      </div>
      <div>
        <button className="w-full bg-green-600 text-white py-3 text-center">Register Now</button>
      </div>
    </form>
  )
}

export default SignUpForm