import Car from '../assets/BMW Car.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import CarImage from '../assets/Constant';


const ImageCard = () =>{
    return(
        <>
            <p>via local storage</p>
                <img src={Car} alt="car-image"/>

            <p>Via cdn</p>
                <img src={CarImage} alt="car-image"/>

            
  <LazyLoadImage
    alt={'https://ik.imagekit.io/Deepika/BMW%20Car.jpg?updatedAt=1754200028183'}
    effect="blur"
    wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
        style: {transitionDelay: "0.5"},
    }}
    src='https://ik.imagekit.io/Deepika/BMW%20Car.jpg?updatedAt=1754200028183'/>
    
    
        </>
    )
}

export default ImageCard;