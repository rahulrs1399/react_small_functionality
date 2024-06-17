// import './App.css';
// import Accordian from './component/accordian';
// import RandomColor from './component/random-color';
// import StarRating from './component/start-rating';
// import ImageSlider from './component/imageslider';
// import { LoadMoreData } from "./component/Load-more-button";

import TreeView from "./component/tree-view";
import menu from "./component/tree-view/data";


function App() {
  return (
    <div className='App'>
      {/* <Accordian />
      <RandomColor /> */}
      {/* <StarRating noOfStar={10}/> */}

      {/* Image Slider */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"}/> */}

        {/* <LoadMoreData /> */}

      <TreeView menu={menu} />
    </div>
  );
}

export default App;
