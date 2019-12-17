import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import images from "./slide_images"

const Slider = () => {

    const [index, setIndex] = React.useState(0);
    const [inc, setInc] = React.useState(1);
/* eslint-disable */
    React.useEffect(() => {
        const timer = setInterval(() => {

        if (index === images.length-1) setInc(-1)
        if (index === 0) setInc(1)
        setIndex(prev => prev + inc);
        
        }, 3000);
        return () => clearInterval(timer);
    }, [index]);
/* eslint-enable */
    return(
        <Gallery
            style={{
                height: "100%",
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto"
            }}
            index={index}
            onRequestChange={i => {
                setIndex(i);
            }}
            >
            {images.map((image, index) => (
                <GalleryImage objectFit="contain" key={index} src={image} />
            ))}
        </Gallery>

    )
}

export default Slider