import React, { useEffect, useState } from "react";
import sledr from "../../assets/imgs/menu.png";
import sledr1 from "../../assets/imgs/menu1.png";
import sledr2 from "../../assets/imgs/menu2.png";
import sledr3 from "../../assets/imgs/menuu.png";
import sledr4 from "../../assets/imgs/menu11.png";
import sledr5 from "../../assets/imgs/menu22.png";
import { ImageSlider } from ".";
export function ImageSliderdata() {
  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth || document.documentElement.clientWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const data = [
    {
      id: 1,
      sledr: sledr,
      sledr1: sledr1,
      sledr2: sledr2,
    },
  ];
  const data1 = [
    {
      id: 1,
      sledr: sledr3,
      sledr1: sledr4,
      sledr2: sledr5,
    },
  ];

  if (screenWidth <= 800) {
    return (
      <div>
        {data1.map((item) => (
          <ImageSlider key={item.id} {...item} />
        ))}
      </div>
    );
  } else if (screenWidth >= 800) {
    return (
      <div>
        {data.map((item) => (
          <ImageSlider key={item.id} {...item} />
        ))}
      </div>
    );
  }
}
