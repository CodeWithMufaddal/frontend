import React from 'react'
import { useUserAuth } from '../../Context/AuthProvider';


const Inward = () => {

   const { user, data, setData } = useUserAuth()


   let style = {
      page: {
         width: '900px',
         margin: 'auto'
      },
      inward: {
         border: '1px solid',
         margin: '45px 30px',
         display: 'flex',
         flexDirection: 'column',

      },
      logo: {
         width: '250px',
         marginRight: '-60px'
      },
      logoUpper:{
         display : 'flex',
         justifyContent: 'center ',
         flexDirection: 'column',



      },
      invoicesUpper: {
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'flex-end',


      },

      invoices: {
         fontWeight: 'bold',
         borderRadius: '5px',
         display: 'flex',
         border: '1px solid var( --primary-color)',
      
         color: 'Black',
         fontSize: '18px',
         padding: '5px',
      },
      address: {
         display: 'flex',
         flexDirection: 'column',
         fontSize: '13px',
         padding: '10px',
         fontFamily: "Arial, Helvetica, sans-serif !important" ,


      },
      header: {
         display: 'flex',
         flexDirection: 'row',
         width: '100%',
         justifyContent: 'space-between',
         borderBottom: '1px solid var( --primary-color)',

      },

      // Main

      userBox: {
         display: 'grid',
         gridTemplateColumns: 'repeat(2 , 1fr)',
         margin: '3px 0',

      },
      otherDetails: {
         display: 'grid',
         gridTemplateColumns: 'repeat(3 , 1fr)',
         margin: '3px 0',
         gridGap: '5px',

      },

      user: {
         border: '1px solid var( --primary-color)',
         padding: '5px',
         fontWeight: 'bold',
         fontSize: '14px',
         display: 'flex',
         flexDirection: 'row',
         alignItems: 'center',
      },
      textarea: {
         border: '1px solid var( --primary-color)',
         display: 'grid',
         gridTemplateColumns: '100px auto',
         alignItems: 'center',
         padding: '5px',

      },

      machineDetails: {
         display: 'flex',
         flexDirection: 'column',
         fontSize: '18px',
         alignItems: 'center',
      },
      machineDetailsTitle: {
         border: '1px solid var( --primary-color)',
         borderRadius: '5px',
         padding: '5px',
         color: 'black',
         fontWeight: 'bold',
      },


      label: {
         fontSize: '16px',
         padding: '3px 7px',
         fontWeight: 'bold',
      },

      EndBox: {
         width: '100%',
      },

      data: {
         margin: '0 10px',
         fontSize: '14px',
         fontWeight: '400',
      },

      footer: {
         margin: '15px',

      },

      title: {
         fontSize: '16px',
         fontWeight: '600',
      },

      tmli: {
         listStyle: 'disc',
         margin: '5px 50px',
         fontFamily: "Arial, Helvetica, sans-serif",
         padding: '1px'
      },

      signing: {
         display: 'flex',
         justifyContent: 'space-between',
         flexDirection: 'row',
         margin: '10px 30px',

      },
      sign: {
         margin: ' 20px 0'

      },

      recive: {
         display: 'flex',
         flexDirection: 'row',
      },

      signbox: {
         width: '100px',
         height: '30px',
         borderBottom: '1px solid'
      },

      footerEnd: {
         fontSize: '16px',
         fontWeight: '600',
         display: 'flex',
         alignItems: 'center',
         flexDirection: 'column',

      },
      underline: {
         borderBottom: '1px solid'
      }
   }

   console.log(data.adapter)


   return (
      <div style={style.page}>
         <div style={style.inward}>
            <header style={style.header} >
               <div style={style.logoUpper} >
                  <img src="./CompanyLogo.png" alt="logo" style={style.logo} />
               </div>

               <div style={style.invoicesUpper}>
                  <span style={style.invoices} >
                     Inward Challan No: IT-{data.InwardNo}
                  </span>
               </div>

               <div style={style.address}>
                  <span>Shop-9, La Ventana,</span>
                  <span>Opp.Sun Shree Society,</span>
                  <span>Near Cloud 9, NIBM Road,</span>
                  <span>Kondhawa, Pune-411048</span>
                  <span>Mobile- 7020388752</span>
               </div>
            </header>

            <main style={style.main}>
               <div className="">
                  {/* user Details */}
                  <div style={style.userBox}>

                     <div style={style.user}>
                        <label htmlFor="name" style={style.label} >Name:- </label>
                        <div style={style.data} >
                           {data.name}
                        </div>
                     </div>

                     <div style={style.user}>
                        <label htmlFor="mobile" style={style.label}>Mobile:- </label>
                        <div style={style.data} >
                           {data.mobileNumber}
                        </div>
                     </div>

                     <div style={style.user}>
                        <label htmlFor="email" style={style.label}>Email:- </label>
                        <div style={style.data} >
                           {data.email}
                        </div>
                     </div>

                     <div style={style.user}>
                        <label htmlFor="time" style={style.label}>Inward Time:- </label>
                        <div style={style.data} >
                           {data.date}
                        </div>
                     </div>
                  </div>


                  <div className="" style={style.machineDetails}>
                     <span style={style.machineDetailsTitle}>
                        Machine Details
                     </span>
                  </div>

                  {/* user Details */}
                  <div style={style.userBox}>

                     <div style={style.user}>
                        <label htmlFor="machineType" style={style.label} >Machine Type:- </label>
                        <div style={style.data} >
                           {data.machineType}
                        </div>
                     </div>

                     <div style={style.user}>
                        <label htmlFor="brand" style={style.label}>Brand:- </label>
                        <div style={style.data} >
                           {data.brand}
                        </div>
                     </div>

                     <div style={style.user}>
                        <label htmlFor="modelNo" style={style.label}>Model No:- </label>
                        <div style={style.data} >
                           {data.modelNo}
                        </div>
                     </div>

                     <div style={style.user}>
                        <label htmlFor="serialNo" style={style.label}>Serial No:- </label>
                        <div style={style.data} >
                           {data.serialNo}
                        </div>
                     </div>
                  </div>


                  <div style={style.otherDetails}>

                     <div style={style.user}>
                        <label htmlFor="machineType" style={style.label} >RAM:- </label>
                        <div style={style.data} >
                           {data.ram}
                        </div>
                     </div>

                     <div style={style.user}>
                        <label htmlFor="brand" style={style.label}>HDD:- </label>
                        <div style={style.data} >
                           {data.hdd}
                        </div>
                     </div>

                     <div style={style.user}>
                        <label htmlFor="modelNo" style={style.label}>SSD:- </label>
                        <div style={style.data} >
                           {data.ssd}
                        </div>
                     </div>

                     <div style={style.user}>
                        <label htmlFor="Battery" style={style.label}>Battery:- </label>
                        <div style={style.data} >
                           {data.battery}
                        </div>
                     </div>

                     <div style={style.user}>
                        <label htmlFor="Adapter" style={style.label}>Adapter:- </label>
                        <div style={style.data} >
                           {data.adapter}
                        </div>
                     </div>

                     <div style={style.user}>
                        <label htmlFor="fan" style={style.label}>Fan:- </label>
                        <div style={style.data} >
                           {data.fan}
                        </div>
                     </div>

                     <div style={style.user}>
                        <label htmlFor="cpu" style={style.label}>CPU:- </label>
                        <div style={style.data} >
                           {data.cpu}
                        </div>
                     </div>

                     <div style={style.user}>
                        <label htmlFor="other" style={style.label}>Other:- </label>
                        <div style={style.data} >
                           {data.other}
                        </div>
                     </div>
                     {/* {data.other.map(() => {

                     })
                     } */}

                  </div>

                  <div style={style.EndBox}>

                     <div style={style.textarea}>
                        <label htmlFor="Problem" style={style.label}>Problem:- </label>
                        <div style={style.data} >
                           {data.problem}
                        </div>
                     </div>

                     <div style={style.textarea}>
                        <label htmlFor="Description" style={style.label}>Description:- </label>
                        <div style={style.data} >
                           {data.discription}
                        </div>
                     </div>
                  </div>
               </div>
            </main>

            <footer style={style.footer}>
               <div style={style.footerhead} >
                  <div style={style.title} >
                     Terms and Conditions:-
                  </div>
                  <ul style={style.tcul} >
                     <li style={style.tmli} >All Material’s received are subject to verification</li>
                     <li style={style.tmli} >We aim to repair the fault as described by the customer and to return the laptop to its original working order where possible.</li>
                     <li style={style.tmli} >If further issues or faults are found while working on your laptop we will notify the you before continuing with the repair. No claim will be entertained in this regard.</li>
                     <li style={style.tmli} >We are the sole judge for the repair or replacement of faulty spares.</li>
                     <li style={style.tmli} >Estimate of the repair will be given for the repairs to the customer on phone.</li>
                     <li style={style.tmli} >Estimate may change if more spares are required to up the faulty material that additional estimate cost will give to the customer on phone.</li>
                     <li style={style.tmli} >After estimate given, customer should revert back for yes or no within 1 day.</li>
                     <li style={style.tmli} >After taking the estimate customer will get approximate of delivery.</li>
                     <li style={style.tmli} >Delivery date may change without prior notice as per the availability of spares.</li>
                     <li style={style.tmli} >After taking the estimate if customer does not want to repair the material then he will be charge for minimum Rs. 500 for diagnostic efforts.</li>
                     <li style={style.tmli} >Customer will be sole responsible for any other problem occurred while repairing the faulty material. Material given for repairs will be on customer’s risk.</li>
                     <li style={style.tmli} >We take no responsibility of working / Non-working of any spares of material & data loss during the repairing.</li>
                     <li style={style.tmli} >We have a 30 days’ warranty of our service specific to the problem repaired. No warranty on Software installation.</li>
                     <li style={style.tmli} >During the repairing time we are not taking any data backup, data backup extra charges will be applicable.</li>
                  </ul>
               </div>

               <div style={style.sign}>
                  <div style={style.title}>
                     <span>Signature:-</span>
                  </div>
                  <div style={style.signing}>
                     <div style={style.recive}>
                        <div className="">
                           <div>For Reciver</div>
                           <div>Signature,</div>
                        </div>
                        <div style={style.signbox}></div>
                     </div>

                     <div style={style.recive}>
                        <div className="">
                           <div>For Customer</div>
                           <div>Signature,</div>
                        </div>
                        <div style={style.signbox} ></div>
                     </div>
                  </div>
                  <div style={style.footerEnd}>
                     <div className="">Thank You For Being With Us,</div>
                     <div style={style.underline}>Burhani IT Care</div>
                  </div>

               </div>

            </footer>



         </div>
      </div>
   )
}

export default Inward