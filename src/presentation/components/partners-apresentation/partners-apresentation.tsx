import styles from './partners-apresentation.module.scss'

const PartnersApresentation = () => {
  return (
    <section className={styles['counter-feature']}>
      <div className={styles.container}>
        <div className={styles['row-text-center']}>
          <div
            className={`${styles['col-lg-3']} ${styles['col-sm-6']} ${styles['col-xs-12']} ${styles['no-padding']} ${styles['wow-fadeInUp']}`}
            data-wow-duration="1s"
            data-wow-delay="0.1s"
            data-wow-offset="0"
          >
            <div className={styles['single-project']}>
              <span className="ti-user"></span>
              <h2 className={styles['counter-num']}>32652</h2>
              <h4>Happy Customers</h4>
            </div>
          </div>
          <div
            className={`${styles['col-lg-3']} ${styles['col-sm-6']} ${styles['col-xs-12']} ${styles['no-padding']} ${styles['wow-fadeInUp']}`}
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            data-wow-offset="0"
          >
            <div className={styles['single-project']}>
              <span className="ti-star"></span>
              <h2 className={styles['counter-num']}>21821</h2>
              <h4>Project Done</h4>
            </div>
          </div>
          <div
            className={`${styles['col-lg-3']} ${styles['col-sm-6']} ${styles['col-xs-12']} ${styles['no-padding']} ${styles['wow-fadeInUp']}`}
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            data-wow-offset="0"
          >
            <div className={styles['single-project']}>
              <span className="ti-pencil-alt"></span>
              <h2 className={styles['counter-num']}>5660</h2>
              <h4>In Business</h4>
            </div>
          </div>
          <div
            className={`${styles['col-lg-3']} ${styles['col-sm-6']} ${styles['col-xs-12']} ${styles['no-padding']} ${styles['wow-fadeInUp']}`}
            data-wow-duration="1s"
            data-wow-delay="0.4s"
            data-wow-offset="0"
          >
            <div className={styles['single-project']}>
              <span className="ti-support"></span>
              <h2 className={styles['counter-num']}>11859</h2>
              <h4>Support Cases</h4>
            </div>
          </div>
        </div>
        <div className={styles['video-section']}>
          <div data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="0">
            <div
              className={styles['video-btn']}
              style={{
                backgroundImage: 'url(https://www.bootdey.com/image/500x500/FF69B4/000000)',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            >
              <h3>Watch video for know more.</h3>
              <a className={styles['video-play']} href="#">
                <i className="ti-video-clapper"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersApresentation
