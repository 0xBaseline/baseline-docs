import React from 'react'
import styles from './banner.module.css'

interface BannerProps {
  title?: string
  subtitle?: string
}

export function Banner({ title, subtitle }: BannerProps) {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        {title && <h1 className={styles.bannerTitle}>{title}</h1>}
        {subtitle && <p className={styles.bannerSubtitle}>{subtitle}</p>}
      </div>
      <div className={styles.bannerGradient} />
    </div>
  )
}