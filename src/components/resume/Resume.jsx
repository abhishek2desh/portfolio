import "./resume.scss"
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
// import Particle from "../Particle";
import pdf from "../../assets/Abhishek_CV_Web.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function ResumeNew() {
  const [width, setWidth] = useState(600);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
      <Container fluid className="resume-section" id="resume">
       <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
            <Page pageNumber={3} scale={width > 786 ? 1.7 : 0.6} />
         </Document>           
        </Row>
    </Container>
  );
}

export default ResumeNew;