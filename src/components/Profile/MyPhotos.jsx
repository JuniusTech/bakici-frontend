
import React from 'react';
import "../../styles/Profile/MyPhotos.css";
import photo_img from "../../assets/photo_img.svg";
import photos from "../../assets/photos.svg";
import tabler_photo from "../../assets/tabler_photo.svg";
import photo1 from "../../assets/photo1.svg";
import photo2 from "../../assets/photo2.svg";
import photo3 from "../../assets/photo3.svg";
import photo4 from "../../assets/photo4.svg";
import photo5 from "../../assets/photo5.svg";
import {HiOutlineTrash} from "react-icons/hi";




const MyPhotos = () => {
  return (
    <>
      <div className="my_photos_container">
        <div className="my_photos">
          <div className="my_photos_text">
            <span>FOTOĞRAFLARIM</span>
            <img src={photo_img} alt="" />
          </div>
        </div>
        <img src={photos} alt="" className='photos' />
        <button className="photos_btn"><span>Değiştir</span> <img src={tabler_photo} alt="" /></button>
        <div className='my_all_photos'>
          <div className="horizontal_photos">
            <img src={photo1} alt="" />
            <button><span>Kaldır</span><HiOutlineTrash className='trash'/> </button> 
          </div>
          <div className="horizontal_photos">
            <img src={photo2} alt="" />
            <button><span>Kaldır</span> <HiOutlineTrash className='trash' /> </button> 
          </div>
          <div className="horizontal_photos">
            <img src={photo3} alt="" />
            <button><span>Kaldır</span> <HiOutlineTrash className='trash' /></button> 
          </div>
          <div className="horizontal_photos">
            <img src={photo4} alt="" />
            <button><span>Kaldır</span> <HiOutlineTrash className='trash'/> </button> 
          </div>
          <div className="horizontal_photos">
            <img src={photo5} alt="" />
            <button><span>Kaldır</span><HiOutlineTrash className='trash'/></button> 
          </div>
        </div>
        <button className='add_photo'><span>Fotoğraf Ekle</span></button>
      </div>
    </>
  )
}

export default MyPhotos;
