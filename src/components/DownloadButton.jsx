import React from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const DownloadButton = () => {
  const handleDownload = async () => {
    const el = document.body // o el contenedor de la hoja
    const canvas = await html2canvas(el, { scale: 2 })
    const imgData = canvas.toDataURL('./src/docuemnto/hoja_de_vida.pdf')
    const pdf = new jsPDF('p', 'mm', 'a4')
    const imgProps = pdf.getImageProperties(imgData)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('hoja_de_vida.pdf')
  }

  return (
    <button onClick={handleDownload} className="download-btn">
      Descargar PDF
    </button>
  )
}

export default DownloadButton
