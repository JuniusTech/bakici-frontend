import BakiciFiltre from "../components/BakiciFiltre";
import NavbarBakici from "../components/NavbarBakici";
import React, { useEffect, useState } from "react";
import "../styles/bakiciara.css";
import Bakicikart from "../components/Bakicikart";
import ReactPaginate from "react-paginate";
import SingleBakici from "./SingleBakici";

const BakiciAra = () => {
  const items = [...Array(17).keys()];
  const itemsPerPage = 8;

  ///// Pagination Start//////
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
    <div className="">
      <NavbarBakici />
      <div className="d-flex flex-column flex-lg-row">
        <BakiciFiltre />

        <div className="row m-0">
          {currentItems.map((item) => (
            <div
              key={item}
              className="col-lg-4 col-md-4 col-sm-6 my-xl-4 my-lg-3 my-md-2 my-sm-1"
            >
              <Bakicikart />
            </div>
          ))}
        </div>
      </div>
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
    </>
  );
};

export default BakiciAra;

/////////ORJİNAL BAKICI ARA/////////////////////////////

// import BakiciFiltre from "../components/BakiciFiltre";
// import NavbarBakici from "../components/NavbarBakici";
// import React, { useEffect, useState } from "react";
// import "../styles/bakiciara.css";
// import Bakicikart from "../components/Bakicikart";
// import ReactPaginate from "react-paginate";

// const BakiciAra = () => {
//   const items = [...Array(17).keys()];
//   const itemsPerPage = 8;

//   ///// Pagination Start//////
//   const [currentItems, setCurrentItems] = useState([]);
//   const [pageCount, setPageCount] = useState(0);
//   const [itemOffset, setItemOffset] = useState(0);

//   useEffect(() => {
//     // Fetch items from another resources.
//     const endOffset = itemOffset + itemsPerPage;
//     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//     setCurrentItems(items.slice(itemOffset, endOffset));
//     setPageCount(Math.ceil(items.length / itemsPerPage));
//   }, [itemOffset]);

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = event.selected * itemsPerPage;
//     console.log(
//       `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
//   };

//   return (
//     <div className="">
//       <NavbarBakici />
//       <div className="d-flex flex-column flex-lg-row">
//         <BakiciFiltre />

//         <div className="row m-0">
//           {currentItems.map((item) => (
//             <div
//               key={item}
//               className="d-grid col-lg-4 col-md-6 my-xl-4 my-lg-3 my-md-2 my-sm-1"
//             >
//               <Bakicikart />
//             </div>
//           ))}
//         </div>
//       </div>
//       <ReactPaginate
//         className="pagination"
//         forcePage={itemOffset / itemsPerPage}
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={3}
//         marginPagesDisplayed={2}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         pageClassName="page-item"
//         pageLinkClassName="page-link"
//         previousClassName="page-item"
//         previousLinkClassName="page-link"
//         nextClassName="page-item"
//         nextLinkClassName="page-link"
//         breakLabel="..."
//         breakClassName="page-item"
//         breakLinkClassName="page-link"
//         containerClassName="pagination"
//         activeClassName="active"
//         renderOnZeroPageCount={null}
//       />
//     </div>
//   );
// };

// export default BakiciAra;

///////////ORJİNAL BAKICI ARA BİTİŞ////////////////
