import React, { useState, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

const FlipBook = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(pages.length);
  const [goToPageInput, setGoToPageInput] = useState('');
  const flipBookRef = useRef();

  const nextButtonClick = () => {
    if (flipBookRef.current) {
      const pageFlip = flipBookRef.current.pageFlip();
      pageFlip.flipNext();
    }
  };

  const prevButtonClick = () => {
    if (flipBookRef.current) {
      const pageFlip = flipBookRef.current.pageFlip();
      pageFlip.flipPrev();
    }
  };

  const goToPage = () => {
    const pageNumber = parseInt(goToPageInput, 10);
    if (pageNumber >= 1 && pageNumber <= totalPages && flipBookRef.current) {
      // Convert to 0-based index
      const pageFlip = flipBookRef.current.pageFlip();
      pageFlip.flip(pageNumber - 1);
      setGoToPageInput('');
    }
  };

  const onFlip = (e) => {
    setCurrentPage(e.data);
  };

  const onChangeState = (e) => {
    if (e.data === 'read' && flipBookRef.current) {
      const pageFlip = flipBookRef.current.pageFlip();
      setTotalPages(pageFlip.getPageCount());
    }
  };

  return (
    <div className="flipbook-container">
      {/* Responsive container */}
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Controls */}
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevButtonClick}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === 0}
              >
                ← Previous
              </button>
              <button
                onClick={nextButtonClick}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage >= totalPages - 1}
              >
                Next →
              </button>
            </div>

            {/* Page counter */}
            <div className="text-gray-600 font-medium">
              Page {currentPage + 1} of {totalPages}
            </div>

            {/* Go to page input */}
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                max={totalPages}
                value={goToPageInput}
                onChange={(e) => setGoToPageInput(e.target.value)}
                placeholder="Page #"
                className="w-20 px-2 py-1 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    goToPage();
                  }
                }}
              />
              <button
                onClick={goToPage}
                className="px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 text-sm"
              >
                Go
              </button>
            </div>
          </div>
        </div>

        {/* FlipBook */}
        <div className="flex justify-center items-center p-4 bg-gray-100 min-h-[600px]">
          <div className="flipbook-wrapper" style={{ maxWidth: '100%', overflow: 'hidden' }}>
            <HTMLFlipBook
              ref={flipBookRef}
              width={600}
              height={800}
              size="stretch"
              minWidth={300}
              maxWidth={800}
              minHeight={400}
              maxHeight={1000}
              showCover={true}
              mobileScrollSupport={true}
              onFlip={onFlip}
              onChangeState={onChangeState}
              className="flipbook"
              style={{ margin: '0 auto' }}
              useMouseEvents={true}
              swipeDistance={30}
              clickEventForward={true}
              usePortrait={false}
              startZIndex={0}
              autoSize={true}
              maxShadowOpacity={0.5}
              showPageCorners={true}
              disableFlipByClick={false}
            >
              {pages.map((page, index) => (
                <div key={index} className="page">
                  {page}
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        .flipbook-container {
          width: 100%;
        }
        
        .flipbook-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .page {
          background-color: white;
          border: 1px solid #ddd;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          box-sizing: border-box;
        }
        
        .page img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        
        .page h1, .page h2, .page h3 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }
        
        .page p {
          text-align: justify;
          line-height: 1.6;
          color: #555;
          margin-bottom: 15px;
        }
        
        @media (max-width: 768px) {
          .flipbook-wrapper {
            transform: scale(0.8);
            transform-origin: center;
          }
        }
        
        @media (max-width: 480px) {
          .flipbook-wrapper {
            transform: scale(0.6);
            transform-origin: center;
          }
        }
      `}</style>
    </div>
  );
};

export default FlipBook;
