import React from 'react'
import './categories.css'
import TextSlider from './TextSlider'

const Category = () => {
    return (
        <div className='category-container'>
            <TextSlider />
            <div className="releases-container">
                <div className="releases-titles">
                    <h1>New Releases (50)</h1>
                    <div className="links">
                        <ul>
                            <li><a href="#">Tops & T-Shirts</a></li>
                            <li><a href="#">Shorts</a></li>
                            <li><a href="#">Hoodies & Pullovers</a></li>
                            <li><a href="#">Jackets & Vests</a></li>
                            <li><a href="#">Pants & Tights</a></li>
                            <li><a href="#">Fleece</a></li>
                            <li><a href="#">Compression & Baselayer</a></li>
                            <li><a href="#">Tracksuits</a></li>
                            <li><a href="#">Socks</a></li>
                        </ul>
                    </div>






                </div>






                <div className="releases-photos"></div>
            </div>






        </div>
    )
}

export default Category