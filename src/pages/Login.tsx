const Login = () => {
  return ( 
    <div className="mx-auto w-full h-screen bg-white p-4 flex flex-col justify-center  max-w-[400px]">
      <img src="/sony_logo_blue_RGB.png" alt="SONY"/>
      <h1 className="text-xl font-bold text-center pb-8">Promoter Management System</h1>
      <div>
        <label>Email</label>
        <input type="text" className="border border-gray-400 p-2 w-full rounded-lg"/>
      </div>
      <div>
        <label>Password</label>
        <input type="text" className="border border-gray-400 p-2 w-full rounded-lg"/>
      </div>
      <div className="pt-8">
        <button className="bg-blue-500 text-white p-2 w-full rounded-lg">Sign In</button>
      </div>
      <span className="pt-4">
        <p>Do not have an account?</p>
        <a className="text-purple-600">Contact Admin</a>
      </span>

    </div>
   );
}
 
export default Login;