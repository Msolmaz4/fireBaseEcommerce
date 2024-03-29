
import "./conta.css" 
const Contact = () => {
  return (
    <div style={{marginTop:"100px", }}>


<h3>Contact Form</h3>

<div className="container">
  <form >
    <label htmlFor="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

    <label htmlFor="lname">Email</label>
    <input type="email" id="lname" name="email" placeholder="Your email.." />

    <label htmlFor="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Germany</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label htmlFor="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '200px'}}></textarea>
      <div className="son">
         <input type="submit" value="Send" />
      </div>
   
     </form>
   </div>



    </div>
  )
}

export default Contact
