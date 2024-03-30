import { useState, useRef } from "react"
import "./conta.css" 
import { Editor } from '@tinymce/tinymce-react';

const Contact = () => {
  const [editorInstance, setEditorInstance] = useState(null);
  const nameRef= useRef(null);
  const mailRef = useRef(null) ;
  const countryRef = useRef("Germany")

const handle = (e)=>{
  e.preventDefault()
 
  const stripHtml = (html) => {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }

  const editorContent = stripHtml(editorInstance.getContent());

  console.log(editorContent, nameRef.current.value, mailRef.current.value, countryRef.current.value)
  
}

  return (
    <div style={{marginTop:"100px", }}>

<h3>Contact Form</h3>

<div className="container">
  <form  onSubmit={handle}>
    <label htmlFor="fname">First Name</label>
    <input type="text" id="fname" name="firstname" ref={nameRef} placeholder="Your name.."  />

    <label htmlFor="lname">Email</label>
    <input type="email" id="lname" name="email" ref={mailRef} placeholder="Your email.."  />

    <label htmlFor="country">Country</label>
    <select id="country" name="country" ref={countryRef} >
      <option value="Germany">Germany</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

   
    <Editor
      onInit={(evt, editor) => setEditorInstance(editor)}
      apiKey='tppxzatzaqaqjjr9w6t5babqd1nmubwplkkb6b47nw34070s'
      init={{
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
      }}
    />
      <div className="son">
         <input type="submit" value="Send" />
      </div>
     </form>
   </div>
    </div>
  )
}

export default Contact
