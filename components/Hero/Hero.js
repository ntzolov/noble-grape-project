import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles['hero']}>
      <div className={styles['hero__text']}>
        <div className={styles['hero__text--left']}>
          <p className={styles['two-columns']}>
            <strong>
              <span className={styles['strong']}>Welcome to a world where wine transcends beverage.</span>
            </strong>
            We are your destination for discerning palates, curating a collection of exquisite wines that tell a story. Each
            bottle represents a meticulous craft, a legacy of tradition, and a unique expression of terroir. Let us help you find
            the perfect bottle to savor and share.
          </p>
          <div className={styles['cta']}>
            {/* <p className={styles['strong']}>Explore our collection today.</p> */}
            <a href='#' className={`${'btn'} ${styles['btn--cta']}`}>
              Browse Wines Now
            </a>
          </div>
        </div>
        <div className={styles['hero__text--right']}>
          <h1>#1 in Europe in sales of high quality and finely selected wines.</h1>
        </div>
      </div>
    </section>
  );
}
