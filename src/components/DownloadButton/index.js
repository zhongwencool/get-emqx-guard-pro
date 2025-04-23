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
              <img src="/img/logo.png" alt="EMQX Guard" className={styles.cardImage} />
            </div>
            <div className={styles.cardText}>
              <h3>Download EMQX Guard</h3>
              <p>Get the latest version now!</p>
              <Link
                className={styles.downloadLink}
                to="https://emqx.dev/downloads"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download →
              </Link>
            </div>
          </div>
        </div>
      )}
      <button
        className={`${styles.floatingButton} ${isOpen ? styles.hidden : ''}`}
        onClick={toggleOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.downloadIcon}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <span>Download Now</span>
      </button>
    </div>
  );
}
