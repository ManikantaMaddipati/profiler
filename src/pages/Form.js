import NavBar from "./NavBar";

function Form() {
    return <>
    <form>
       <div>
           <div>
           <label>First Name</label>
           <input type="text" name="firstname" required/>
           <label>Last Name</label>
           <input type="text" name="lastname" required/>
           </div>

           <div>
           <label> Email Address</label>
           <input type="text" name="emailaddress" required/>
           </div>

           <div>
               <label>password</label>
               <input type="password" name="password" required/>
               <label>Re-enter Password</label>
               <input type="password" name="password2" required/>
           </div>

           <button>Sign Up</button>
       </div>
    </form>
    </>
}

export default Form