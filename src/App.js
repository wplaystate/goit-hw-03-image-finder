import './App.css';
import react, {Component} from 'react'
import Searchbar from './modules/Searchbar/Searchbar';
import ImageGalleryItem from './modules/ImageGalleryItem/ImageGalleryItem';
import LoadMore from './modules/LoadMore/LoadMore';
import axios from 'axios';

export default class App extends Component{
  state = {
    query: '',
    onSubmit: [],
    per_page: 12
  }
  search = (e) => {
    e.preventDefault();

    axios
      .get('https://pixabay.com/api/?q=' + this.state.query + '&page=1&key=' + '18650341-19c64afe89823f2a939dc98db' + '&image_type=photo&orientation=horizontal&per_page=' + this.state.per_page)
      .then(response => this.setState({ onSubmit: response.data.hits }));
    console.log(this.state.onSubmit);
  }
  // load_images = (e) => {
  //   axios
  //     .get('https://pixabay.com/api/?q=' + this.state.query + '&page=1&key=' + '18650341-19c64afe89823f2a939dc98db' + '&image_type=photo&orientation=horizontal&per_page=' + this.state.per_page + 12)
  //     .then(response => this.setState({ onSubmit: response.data.hits }));
  //   console.log(this.state.onSubmit);

  //   const obj = this.props.onSubmit.map((prop, i) => {
  //     return (
  //         <li className="ImageGalleryItem">
  //             <img src={prop.webformatURL} alt="" className="ImageGalleryItem-image" width="300px" height="200px"/>
  //         </li>
  //     )
  //   })
    
  //   return (
  //     <ul className="ImageGallery">
  //       {obj}
  //     </ul>
  //   )
  // }
  render(){
    return(
      <>
        <Searchbar 
          onSearch={this.search}
          query={this.state.query}
          onChange={(e) => this.setState({ query: e.target.value })}
        />
        <ImageGalleryItem
          onSubmit={this.state.onSubmit}
        />
        {/* <LoadMore
          onSubmit={this.load_images}
          onSearch={this.search}
        /> */}
      </>
    )
  }
}

