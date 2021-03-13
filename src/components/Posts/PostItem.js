import React from 'react'
import img from '../../assets/img/blog/01.jpg'
function PostItem(props) {
    return (
        <div className="col-12" style={{'display':'flex', 'justifyContent':'center','marginBottom':'20px'}}>
              
            <div className="card" style={{'width': '100%', 'maxWidth':'500px', 'alignContent':'center', 'alignItems':'center'}}>
                <img src={img}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
          </div>
    )
}

export default PostItem
