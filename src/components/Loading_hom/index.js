import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import loading from "../../assets/imgs/logbend.png";

function Loading_hom() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Yüklenayotgan rasmlarni tanlash
    const images = document.querySelectorAll("img");

    // Boshqa yuklanayotgan narsalarni tanlash (masalan, video)
    const otherElements = document.querySelectorAll("video");

    let loadedCount = 0;
    const totalToLoad = images.length + otherElements.length;

    // Barcha rasmlar va boshqa narsalarni yuklashni boshlash
    function loadElements() {
      images.forEach(function (image) {
        image.addEventListener("load", handleLoad);
        image.addEventListener("error", handleLoad);
      });

      otherElements.forEach(function (element) {
        element.addEventListener("loadeddata", handleLoad);
        element.addEventListener("error", handleLoad);
      });
    }

    // Bir element yuklandi yoki xatolandi
    function handleLoad() {
      loadedCount++;

      if (loadedCount === totalToLoad) {
        // Barcha rasm va narsalar yuklandi
        hideLoader();
      }
    }

    // "loader"ni yashirish
    function hideLoader() {
      setIsLoading(false);
    }

    // Yuklashni boshlash
    loadElements();
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
    </>
  );
}

export default Loading_hom;

//   const [loaderr, setLoaderr] = useState();
//   const [displayy, setdisplayy] = useState();
//   window.addEventListener("DOMContentLoaded", (listener) => {
//     setTimeout(function () {
//       setLoaderr(0);

//       setTimeout(function () {
//         setdisplayy("none");
//       }, 500);
//     }, 2000);
//   });
// import React, { useEffect, useState } from "react";
// import styles from "./index.module.scss";
// import loading from "../../assets/imgs/logbend.png";
// function Loading_hom() {
//   // window.addEventListener(type:'DOMContentLoaded' , listener =>{
//   //     const loader = document.querySelector(selectors '.loader')
//   // })
//   // setTimeout(handler:() => {
//   //     loader.style.opacity = '0'
//   //     setTimeout(handler:() => {
//   //     loader.style.opacity = 'none'

//   //     }, 500);

//   // }, 2000);
//   const [loaderOpacity, setLoaderOpacity] = useState(1);

//   useEffect(() => {
//     // DOM yuklandi
//     setTimeout(() => {
//       // 2 sekunddan so'ng yuklashni boshqarish
//       setLoaderOpacity(0);

//       setTimeout(() => {
//         // 500 ms dan so'ng loaderni yashirish
//         setLoaderOpacity(1);
//       }, 500);
//     }, 2000);
//   }, []);
//   return (
//     <div className="loader" style={{ opacity: loaderOpacity }}>
//       <div className={styles.loading_hom} id="loading">
//         <div></div>
//         <img src={loading} alt="Img not found" className={styles.img} />
//       </div>
//     </div>
//   );
// }

// export default Loading_hom;
