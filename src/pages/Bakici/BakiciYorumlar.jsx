import React from 'react';
import "./../../styles/BakiciYorumlar.css";
import kullanıcı1 from "./../../assets/bakici_yorum_kullanıcı1.svg";
import kullanıcı2 from "./../../assets/bakici_yorum_kullanıcı2.svg";
import kullanıcı3 from "./../../assets/bakici_yorum_kullanıcı3.svg";


import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';

const BakiciYorumlar = () => {

    
    const itemsPerPage = 3;
  
    ///// Pagination Start//////
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);


      
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
        
    }, [itemOffset]);
    console.log(currentItems);
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
        console.log(itemOffset);
    };

    
    const date_array=[];
    let data =[
        {
        name:"Fulya Karabulut",
        date:"11-08-2023",
        comment:"Memnun kaldik, oglum ile kaliteli vakit gecirdiler. Montesori aktiviteleri hosumuza gitti.",
        point:"⭐⭐⭐⭐⭐",
        work_type:"Part-time",
        baby_type:"3 yas uzeri",
        image:kullanıcı1,
    },
    {
        name:"Ahmet Bulur",
        date:"07-02-2023",
        comment:"Memnun kaldik, oglum ile kaliteli vakit gecirdiler. Montesori aktiviteleri hosumuza gitti.",
        point:"⭐⭐⭐⭐⭐",
        work_type:"Fulltime",
        baby_type:"0-12 aylik",
        image:kullanıcı3,
    }
    ,
    {
        name:"Fatma Betul",
        date:"10-04-2023",
        comment:"Harika bir deneyimdi. Tavsiye ediyorum. Guvenilir ve kaliteli birisi",
        point:"⭐⭐⭐⭐⭐",
        work_type:"Part-time",
        baby_type:"3 yas uzeri",
        image:kullanıcı2,
    }
]
const count=data.length;
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
if(month <10){
    month="0"+month;
}
// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${day}-${month}-${year}`;


data.sort((a,b) => new Date(b.date) - new Date(a.date))

    let bool = false;
    data.map(dat => {
        bool = false;
        date_array.map((arr) =>{
            if(arr == dat.date){
                bool=true;
            }
        })
        if(bool){
            date_array.push("");
        }
        if(bool==false){
            date_array.push(dat.date);
        }
    })

  

  return (
    <div className='bakici-yorumlar container'>
        <p className='bakici-yorumlar-p text-center'>
        Toplamda {count} Ebeveyn sizin hakkinizda yorum yapti
        </p>

        {

            currentItems.map((data,i) => {
                return (
                    <div>
                    {
                        date_array[itemOffset+i]==data.date && <div className='d-flex justify-content-between bakici-yorumlar-data-date-top gap-3 '>
                        
                        <hr className={'bakici-yorumlar-hr'}/>
                        <p className={data.date == currentDate ? 'bakici-yorumlar-date-today' : 'bakici-yorumlar-date'}> {data.date == currentDate ? "Bugün" : date_array[i]}</p>
                       
                        <hr className={'bakici-yorumlar-hr'}/>
                    </div>
                    }
                    
                    <div className='bakici-yorumlar-data'>
                    
                        <div className='bakici-yorumlar-data-top flex-column flex-md-row'>
                            <div className='bakici-yorumlar-data-top-left flex-column flex-md-row'>
                                <img src={data.image} className='bakici-yorumlar-data-top-left-img mt-5 mt-md-0' alt="" />
                                <div className='d-flex align-items-end justify-content-center'>
                                <p className='bakici-yorumlar-data-top-left-p m-0'>{data.name}, {data.date}</p>
                           
                                </div>
                                </div>
                            <div className='bakici-yorumlar-data-top-right m-2'>
                                <p className='bakici-yorumlar-data-top-right-point'>{data.point}</p>
                                <p className='bakici-yorumlar-data-top-right-type'>{data.work_type} - {data.baby_type}</p>
                            </div>
                        </div>
                        <div>
                            <p className='bakici-yorumlar-data-bottom'>{data.comment}</p>
                        </div>
                    </div>
                    </div>
                    
                )
            })

           
           
        }
        <ReactPaginate
        className="pagination"
        forcePage={itemOffset / itemsPerPage}
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default BakiciYorumlar