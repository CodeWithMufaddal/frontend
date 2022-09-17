import React from 'react'
import CsvDownload from 'react-json-to-csv'
import './InwardHistory.css'

const InwardHistory = () => {
  let data = [
    {
    "no": 1,
    "name": "Stefanie Swift",
    "age": 24,
    "tel": "1-994-397-6176",
    "email": "oreilly.aliya@gmail.com"
    },
    {
    "no": 2,
    "name": "Peyton Steuber",
    "age": 46,
    "tel": "(225) 909-5911",
    "email": "pvon@hotmail.com"
    },
    {
    "no": 3,
    "name": "Elinore Haley",
    "age": 59,
    "tel": "493.373.4461 x43351",
    "email": "dsatterfield@gmail.com"
    },
    {
    "no": 4,
    "name": "Jarrett Kirlin",
    "age": 53,
    "tel": "+1-558-520-8713",
    "email": "akling@hotmail.com"
    },
    {
    "no": 5,
    "name": "Grayson Murphy",
    "age": 44,
    "tel": "865-571-3714 x6265",
    "email": "maiya01@gmail.com"
    }
    ]
  return (
    <main className="page-center">
      <div className="inwardHistory">
        f
      </div>
      <div className="downloadPanel">
        <div className="downloadDiv">
          <button type="button" className=" btns ">Download</button>
          <CsvDownload
            className="btns"
          data={data}
            filename=".csv"
          />
        </div>
      </div>
    </main>
  )
}

export default InwardHistory