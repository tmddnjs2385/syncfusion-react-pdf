import React from 'react';

import './App.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, TextSelection, Annotation, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';

//PDF_Succinctly.pdf
function App() {
  return (
    <div className="App">
      <PdfViewerComponent id="container" documentPath="" serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer" style={{ 'height': '900px' }}>
                <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,  TextSelection, TextSearch]}/>
            </PdfViewerComponent>;
    </div>
  );
}

export default App;
