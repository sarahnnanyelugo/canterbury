import React, { useEffect, useState } from "react";

const DriveFolderSlider = ({ folderUrl, apiKey }) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgFolder,setImgFolder]=useState("");

  const extractFolderId = (url) => {
    const match = url.match(/\/folders\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  };

  useEffect(() => {
    const fetchImages = async () => {
      const folderId = extractFolderId(folderUrl);
      if (!folderId) {
        console.error("Invalid folder URL");
        return;
      }
      setImgFolder(folderId);

      try {
        const res = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType)`
        );
        const data = await res.json();
        const images = data.files
          .filter((file) => file.mimeType.startsWith("image/"))
          .map((file) => `https://drive.google.com/uc?export=view&id=${file.id}`);
        setImageUrls(images);
      } catch (error) {
        console.error("Error fetching Drive files:", error);
      }
    };

    fetchImages();
  }, [folderUrl, apiKey]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
  };

  if (imageUrls.length === 0) return <div>Loading images...</div>;

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="w-full max-w-md aspect-video overflow-hidden rounded-xl border shadow relative">
        <img
          src={imageUrls[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-contain transition duration-300"
        />
      </div>
      <div className="flex space-x-4">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
      <div className="text-sm text-gray-500">
        {currentIndex + 1} / {imageUrls.length}
      </div>

      {/* <iframe 
  src={`https://drive.google.com/embeddedfolderview?id=${imgFolder}#grid`} 
  style={{"width":"100%", "height":"600px", "border":"0"}}>
</iframe> */}
    </div>
  );
};

export default DriveFolderSlider;
