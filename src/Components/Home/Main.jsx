import React, { useState, useEffect, useRef, useCallback, forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Main.css'
import { useUserAuth } from '../../Context/AuthProvider';
import ReactToPrint from 'react-to-print';
import Inward from './Inward'
import fileDownload from 'js-file-download';



const Main = () => {
   const naviget = useNavigate()
   const { user, data, setData } = useUserAuth()

   const onBeforeGetContentResolve = useRef(null);
   const componentRef = useRef(null);

   useCallback(() => {
      return componentRef.current
   }, [componentRef.current])

   const downloadChallan = async () => {
      fileDownload(data.json(), 'filename.csv');

   }




   let date = new Date()

   useEffect(() => {
      let interval = setInterval(() => {
         setData({ ...data, date: date.toLocaleString() })
      }, 60 * 1000);


      return () => {
         clearTimeout(interval)
      }
   }, [data])

   const handlesubmit = (e) => {
      e.preventDefault()
      // naviget('/inward/preview')
   }

   const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value })
   }


   return (
      <main className="page-center main">
         <div className="headerContent">

            <form action="" method="post" onSubmit={handlesubmit} className="form-control form ">

               <div className="section top1">

                  <div className="section">

                     <div className="C__Details">
                        <span className="C__Details__Inner">CUSTOMER DETAILS</span>
                     </div>

                     <div className="section top1A">
                        <div className="details">
                           <div className="Field">
                              <label htmlFor="" className="detailsName">Name:</label>
                           </div>
                           <div className="inputField Field">
                              <input type="text" name="name" onChange={handleChange} id="" className="input" />
                           </div>
                        </div>

                        <div className="details">
                           <div className="Field">
                              <label htmlFor="Mobile Number" className="detailsName">Mobile Number:</label>
                           </div>
                           <div className="inputField Field">
                              <input type="tel" name="mobileNumber" onChange={handleChange} id="" className="input" />
                           </div>
                        </div>

                        <div className="details">
                           <div className="Field">
                              <label htmlFor="" className="detailsName">Email:</label>
                           </div>
                           <div className="inputField Field">
                              <input type="email" name="email" onChange={handleChange} id="" className="input" />
                           </div>
                        </div>

                        <div className="details">
                           <div className="Field">
                              <label htmlFor="" className="detailsName">Date:</label>
                           </div>
                           <div className="inputField Field">
                              <time dateTime={data.date} name='date' onChange={handleChange} className="input"  >{data.date}  </time>
                           </div>
                        </div>
                     </div>
                  </div>


                  <div className="C__Details">
                     <span className="C__Details__Inner">DEVICE DESCRIPTION</span>
                  </div>

                  <div className="section top2B top1A">
                     <div className="details">
                        <div className="Field">
                           <label htmlFor="" className="detailsName">Machine Type:</label>
                        </div>
                        <div className="inputField Field">
                           <input type="text" name="machineType" onChange={handleChange} id="" className="input" />
                        </div>
                     </div>

                     <div className="details">
                        <div className="Field">
                           <label htmlFor="" className="detailsName">Brand:</label>
                        </div>
                        <div className="inputField Field">
                           <input type="text" name="brand" onChange={handleChange} id="" className="input" />
                        </div>
                     </div>

                     <div className="details">
                        <div className="Field">
                           <label htmlFor="" className="detailsName">Model No:</label>
                        </div>
                        <div className="inputField Field">
                           <input type="text" name="modelNo" onChange={handleChange} id="" className="input" />
                        </div>
                     </div>

                     <div className="details">
                        <div className="Field">
                           <label htmlFor="" className="detailsName">Serial No:</label>
                        </div>
                        <div className="inputField Field">
                           <input type="text" name="serialNo" onChange={handleChange} id="" className="input" />
                        </div>
                     </div>


                     <div className="details">
                        <div className="Field">
                           <label htmlFor="" className="detailsName">RAM:</label>
                        </div>
                        <div className="inputField Field">
                           <input type="text" name="ram" onChange={handleChange} id="" className="input" />
                        </div>
                     </div>

                     <div className="details">
                        <div className="Field">
                           <label htmlFor="" className="detailsName">HDD:</label>
                        </div>
                        <div className="inputField Field">
                           <input type="text" name="hdd" onChange={handleChange} id="" className="input" />
                        </div>
                     </div>

                     <div className="details">
                        <div className="Field">
                           <label htmlFor="" className="detailsName">SSD:</label>
                        </div>
                        <div className="inputField Field">
                           <input type="text" name="ssd" onChange={handleChange} id="" className="input" />
                        </div>
                     </div>

                     <div className="details">
                        <div className="Field">
                           <label htmlFor="" className="detailsName">Battery:</label>
                        </div>
                        <div className="inputField Field">
                           <select className="input" name="battery" onChange={handleChange}>
                              <option value="YES">YES</option>
                              <option value="NO">NO</option>
                           </select>
                        </div>
                     </div>

                     <div className="details">
                        <div className="Field">
                           <label htmlFor="" className="detailsName">Adapter:</label>
                        </div>
                        <div className="inputField Field">
                           <select className="input" name="adapter" onChange={handleChange} >
                              <option value="YES">YES</option>
                              <option value="NO">NO</option>
                           </select>
                        </div>
                     </div>



                     <div className="details">
                        <div className="Field">
                           <label htmlFor="" className="detailsName">Fan:</label>
                        </div>
                        <div className="inputField Field">
                           <select className="input" name="fan" onChange={handleChange} >
                              <option value="YES">YES</option>
                              <option value="NO">NO</option>
                           </select>
                        </div>
                     </div>

                     <div className="details">
                        <div className="Field">
                           <label htmlFor="" className="detailsName">CPU:</label>
                        </div>
                        <div className="inputField Field">
                           <input type="text" name="cpu" onChange={handleChange} id="" className="input" />
                        </div>
                     </div>

                     <div className="details">
                        <div className="Field">
                           <label htmlFor="" className="detailsName">other:</label>
                        </div>
                        <div className="inputField Field">
                           <input type="text" name="other" onChange={handleChange} id="" className="input" />
                        </div>
                     </div>

                     <div className="details">
                        <div className="inputField Field ">
                           <svg aria-label="New Post" className="_9zn7" color="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">

                              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>
                              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>

                              <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>


               <div className="section top2">
                  <div className="section">
                     <div className="billNo">
                        <span className="billNoInner">IT -
                           <input type="text" name="InwardNo" onChange={handleChange} value={data.InwardNo} id="InwardNo" className="input" />
                        </span>
                     </div>
                  </div>

                  <div className="section top2A">

                     <div className="details">
                        <div className="Field">
                           <label htmlFor="" className="detailsName">PROBLEM:</label>
                        </div>
                        <div className="inputField Field">
                           <textarea aria-label="Problem" placeholder="Problem..."
                              autoComplete="off" autoCorrect="off" name="problem" onChange={handleChange} id="" className="input textarea"></textarea>
                        </div>
                     </div>

                     <div className="details">
                        <div className="Field">
                           <label htmlFor="" className="detailsName">Discription:</label>
                        </div>
                        <div className="inputField Field">
                           <textarea aria-label="Discription" placeholder="Discription..."
                              autoComplete="off" autoCorrect="off" name="discription" onChange={handleChange} id="" className="input textarea"></textarea>
                        </div>
                     </div>

                  </div>

                  <div className="section">
                     <div className="btn ">

                        <button className="btns clearbtn" type="reset">Clear</button>

                        <ReactToPrint
                           trigger={() => <button type='button' className="btns clearbtn">Print </button>}
                           content={() => componentRef.current}
                           documentTitle={`Inward Challan No: IT-${data.InwardNo}`}
                        />
                        <ReactToPrint
                           trigger={() => <button type='button' className="btns clearbtn" >Print and Download</button>}
                           content={() => componentRef.current}
                           documentTitle={`Inward Challan No: IT-${data.InwardNo}`}
                           onAfterPrint={downloadChallan}
                        />
                     </div>
                  </div>
               </div>



            </form>


         </div>
         <div className="preview">
            <h1 className="headline" >Preview</h1>
         </div>
         <div className="print align-items-center" ref={componentRef}>
            <Inward />
         </div>


      </main >
   )
}

export default Main