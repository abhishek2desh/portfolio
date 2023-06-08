import 'bootstrap/dist/css/bootstrap.min.css';  
import React, { useCallback, useState, useEffect } from "react";
import { Pagination,Container, Row } from "react-bootstrap";
// import Particle from "../Particle";
import pdf from "../../assets/Abhishek_CV_Web.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./resume.scss"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function ResumeNew() {
  const [width, setWidth] = useState(786);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(null);
  

  useEffect(() => {
    setWidth(window.innerWidth);
    setNumPages(3);
    setPageNumber(1);
  }, []);

  const changePage = useCallback(
    (offset) => setPageNumber((prevPageNumber) => (prevPageNumber || 1) + offset),
    [],
  );

  const previousPage = useCallback(() => changePage(-1), [changePage]);

  const nextPage = useCallback(() => changePage(1), [changePage]);

  return (
      <Container fluid className="resume-section" id="resume">
        <Row>
            <div className='container p-4'>  
                <Pagination>   
                    <Pagination.Prev disabled={pageNumber <= 1}
                    onClick={previousPage} />  
                    <Pagination.Next disabled={pageNumber >= numPages}
                    onClick={nextPage} className="offset-10" />  
                </Pagination>  
            </div>    
        </Row>
       <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={pageNumber} scale={width > 786 ? 1.1 : 0.6} />
         </Document> 
        </Row>
        <Row>
            <div className='container p-4'>  
                <Pagination>   
                    <Pagination.Prev disabled={pageNumber <= 1}
                    onClick={previousPage} />  
                    <Pagination.Next disabled={pageNumber >= numPages}
                    onClick={nextPage} className="offset-10" />  
                </Pagination>  
            </div>    
        </Row>
    </Container>
  );
}

export default ResumeNew;