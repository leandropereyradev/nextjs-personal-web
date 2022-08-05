/* eslint-disable @next/next/no-img-element */
import { FormattedMessage } from "react-intl";
import styles from "../styles/carousel.module.css";
import { bdPortfolio } from "../pages/api/bdPortfolio";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [works] = useState(bdPortfolio);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = works.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, works]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel_center}>
        {works.map((singleWork, indexWork) => {
          const { id, title, subtitle, tech, web, github, image } = singleWork;
          let position = styles.nextSlide;
          if (indexWork === index) {
            position = styles.activeSlide;
          }
          if (indexWork === index - 1 || (index === 0 && indexWork === works.length - 1)) {
            position = styles.lastSlide;
          }
          return (
            <article key={id} className={`${position} ${styles.article}`}>
              <div className={styles.carousel_container}>
                <div className={styles.carousel_image_container}>
                  <img src={image} alt="images" />
                </div>
                <div className={styles.carousel_titulo}>
                  <h3>{title}</h3>
                  <h5>{subtitle}</h5>
                  <div className={styles.carousel_contenedor_lineas}>
                    <div className={styles.carousel_linea_uno} />
                    <div className={styles.carousel_linea_dos} />
                  </div>
                  <h6>{tech}</h6>
                  <div className={styles.carousel_links}>
                    {web ? (
                      <a
                        href={web}
                        target="_blank"
                        rel="noopener
                                noreferrer"
                      >
                        <FormattedMessage id="links_1" defaultMessage="Portfolio" />
                      </a>
                    ) : (
                      <></>
                    )}
                    {github ? (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener
                                noreferrer"
                      >
                        <FormattedMessage id="links_2" defaultMessage="Portfolio" />
                      </a>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
        <img className={styles.carousel_left} src="/images/left.svg" alt="left" onClick={() => setIndex(index - 1)} />
        <img className={styles.carousel_right} src="/images/right.svg" alt="rigth" onClick={() => setIndex(index + 1)} />
      </div>
    </div>
  );
};

export default Carousel;
