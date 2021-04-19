import React from 'react';
import FormItems from './formitems.js';
import Formitem from './formitem.js'


class Form extends React.Component{
  render() {
    const formComponents = FormItems.map(item =>
        <Formitem
          cName = {item.cName}
          labelfor = {item.labelfor}
          labeltitle = {item.labeltitle}
          inputtype = {item.inputtype}
          inputcName = {item.inputcName}
          placeholder = {item.placeholder}
          name = {item.name}
         />)
    return (
      <form action="#" className="Contactform col-5 mx-auto p-5">
        <h1>Get in touch with us</h1>
        {formComponents}
        <div class="form-group">
          <label for="msg">
            <b>Message:</b>
          </label>
          <textarea className="form-control" rows="5" id="msg" required></textarea >
          <button  type="submit" id="submit" class="mb-2 btn mt-2 btn-secondary">Send</button>
       </div>
      </form>
    );
  }
}
export default Form