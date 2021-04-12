import React, { Component, Fragment } from "react";

class PostRequest extends Component {
    render() {
        return (
            <div className="container" 
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}>
               <form>
                 <div class="form-group">

                     <label for="exampleFormControlInput1">title</label>
                     <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Text"/>
                 </div>
                    <div class="form-group">
                     <label for="exampleFormControlTextarea1">Textarea</label>
                     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </div>
            
        )
    }
}


export default PostRequest
