import react, { Component } from "react";

export default class ImageGalleryItem extends Component{
    render(){
        const obj = this.props.onSubmit.map((prop, i) => {
            return (
                <li className="ImageGalleryItem">
                    <img src={prop.webformatURL} alt="" key={prop.id} className="ImageGalleryItem-image" width="300px" height="200px"/>
                </li>
            )
        })
        return(
            <ul className="ImageGallery">
                {obj}
            </ul>
        )
    }
}

