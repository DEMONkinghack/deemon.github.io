function Login(){
     return(
         
        <div  className="">
             <h1 className="font-bold text-[40px] text-center">Conect With</h1>
            <form action="" className="ml-[400px]">
                <label  className="font-bold text-[20px]"   htmlFor="">Email</label><br />
                <input className="border-2 border-solid rounded-[20px] border-green-600 w-[700px] h-[40px]  " type="Email" value=""  placeholder="Enter your Email....." /><br />
                <label className="font-bold text-[20px]"  htmlFor="">Subject</label> <br />
                <input className="border-2 border-solid rounded-[20px] border-green-600 w-[700px] h-[40px]  "  type="text" value="" placeholder="Enter your Sunject...." /><br />
                <label  className="font-bold text-[20px]" htmlFor="" >message</label><br />
                <input className="border-2 border-solid rounded-[20px] border-green-600 w-[700px] h-[40px]  " type="text" value="" placeholder="Enter your message......" /> <br />
             
                

            </form>
        </div>
     )
}
export default Login