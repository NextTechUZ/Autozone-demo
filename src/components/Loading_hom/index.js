// import React, { useEffect, useState } from "react";
// import styles from "./index.module.scss";
// import loading from "../../assets/imgs/logbend.png";

// function Loading_hom() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Yüklenayotgan rasmlarni tanlash
//     const images = document.querySelectorAll("img");

//     // Boshqa yuklanayotgan narsalarni tanlash (masalan, video)
//     const otherElements = document.querySelectorAll("video");

//     let loadedCount = 0;
//     const totalToLoad = images.length + otherElements.length;

//     // Barcha rasmlar va boshqa narsalarni yuklashni boshlash
//     function loadElements() {
//       images.forEach(function (image) {
//         image.addEventListener("load", handleLoad);
//         image.addEventListener("error", handleLoad);
//       });

//       otherElements.forEach(function (element) {
//         element.addEventListener("loadeddata", handleLoad);
//         element.addEventListener("error", handleLoad);
//       });
//     }

//     // Bir element yuklandi yoki xatolandi
//     function handleLoad() {
//       loadedCount++;

//       if (loadedCount === totalToLoad) {
//         // Barcha rasm va narsalar yuklandi
//         hideLoader();
//       }
//     }

//     // "loader"ni yashirish
//     function hideLoader() {
//       setIsLoading(false);
//     }

//     // Yuklashni boshlash
//     loadElements();
//   }, []);

//   return (
//     <>
//       {isLoading && (
//         <div id="loader">
//           <div className={styles.loadingHom}>
//             <div></div>
//             <img src={loading} alt="Img not found" className={styles.img} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Loading_hom;
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import loading from "../../assets/imgs/logbend.png";

function Loading_hom() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Cleanup the timeout when the component unmounts
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div id="loader">
          <div className={styles.loadingHom}>
            <div></div>
            <img src={loading} alt="Img not found" className={styles.img} />
          </div>
        </div>
      )}
      {/* Your content to be displayed after loading */}
    </>
  );
}

export default Loading_hom;
