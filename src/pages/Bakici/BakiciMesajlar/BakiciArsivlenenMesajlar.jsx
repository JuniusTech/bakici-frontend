import React from 'react'

const BakiciArsivlenenMesajlar = ({selectedNumber} ) => {

  const clickedp = () =>{
    selectedNumber(7);
  }
  return (
    <div>
    <div className='BakiciMesajlarGelenKutusu'>
    <p className='BakiciMesajlarGelenKutusuGeri' onClick={clickedp}>Gelen Kutusuna geri dönün</p>
    </div>
    </div>
  )
}

export default BakiciArsivlenenMesajlar