import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function DownloadButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  // Auto-show the download card after 5 seconds, but only once per session
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasBeenShown) {
        setIsOpen(true);
        setHasBeenShown(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasBeenShown]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setHasBeenShown(true);
  };

  const closeButton = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.downloadButtonContainer}>
      {isOpen && (
        <div className={styles.downloadCard}>
          <button className={styles.closeButton} onClick={closeButton}>
            ×
          </button>
          <div className={styles.cardContent}>
            <div className={styles.cardIcon}>
              <img src="/img/logo.png" alt="EMQX Guard Pro" className={styles.cardImage} />
            </div>
            <div className={styles.cardText}>
              <h3>Download EMQX Guard Pro</h3>
              <p>Boost your EMQX now!</p>
              <Link
                className={styles.downloadLink}
                to="https://github.com/zhongwencool/get-emqx-guard-pro/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Latest →
              </Link>
            </div>
          </div>
        </div>
      )}
      <button
        className={`${styles.floatingButton} ${isOpen ? styles.hidden : ''}`}
        onClick={toggleOpen}
      >
        Install Free
      </button>
    </div>
  );
}
