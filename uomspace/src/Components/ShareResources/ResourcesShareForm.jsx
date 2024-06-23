const ResourcesShareForm = () => {
  return (
    <form action="#">
        <div className="grid grid-cols-2 gap-5">
        <select id="Dept" name="Dept" className="border border-gray-400 py-1 px-2">
        <option value="">Select Department</option>
        <option value="">Software Engineering</option>
        <option value="">Computer Science & IT</option>
        <option value="">Chemistry</option>
        <option value="">Biotechnology</option>
        <option value="">Biochemistry</option>
        <option value="">Botany</option>
        </select>
                <select id="Semester" name="Semseter" className="border border-gray-400 py-1">
                <option value="none">Select Semseter</option>
                <option value="1st Semester">1st Semseter</option>
                <option value="2nd Semester">2nd Semester</option>
                <option value="3rd Semester">3rd Semester</option>
                <option value="4th Semester">4th Semester</option>
                <option value="5th Semester">5th Semester</option>
                <option value="6th Semester">6th Semester</option>
                <option value="7th Semester">7th Semester</option>
                <option value="8th Semester">8th Semester</option>
                </select>
                <input type="name" placeholder="Enter Your Name Here" className="border border-gray-400 py-1 px-2"/>
                <input type="text" placeholder="Enter File Name(Short)" className="border border-gray-400 py-1 px-2"/>
            </div>
            <div className="grid grid-cols mt-3">
                <label htmlFor="">Upload file</label>
                <input type="file" name="" id="" className="border border-gray-400 py-1 px-2"/>
            </div>
            <div className="grid grid-cols-1 mt-3">
                <button className="w-full bg-green-600 text-white py-3 text-center">Upload</button>
            </div>

    </form>
  )
}

export default ResourcesShareForm;