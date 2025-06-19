"use client";

import styles from "@/components/Header/header.module.css";
import { SEA_COMMON } from "@/consts/common/text";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ドロップダウンのホバー処理
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // ディレイ表示
  };

  // スクロール時にヘッダー表示をトリガー
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${showHeader ? styles.visible : ""}`}>
      <div className={styles.container}>
        {/* ロゴと会社名 */}
        <div className={styles.logoArea}>
          <Image
            src="/SEAlogo.png"
            alt="会社ロゴ"
            width={40}
            height={40}
            className={styles.logo}
          />
          <span className={styles.companyName}>{SEA_COMMON.COMPANY_NAME}</span>
        </div>

        {/* ナビゲーション */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            トップ
          </Link>

          {/* 企業情報 */}
          <div
            className={styles.dropdownWrapper}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.navLink}>企業情報</div>
            {isOpen && (
              <div className={styles.dropdown}>
                <Link href="/company/profile" className={styles.dropdownItem}>
                  会社概要
                </Link>
                <Link
                  href="/company/PrivacyPolicy"
                  className={styles.dropdownItem}
                >
                  プライバシーポリシー
                </Link>
              </div>
            )}
          </div>

          <Link href="/message" className={styles.navLink}>
            代表者メッセージ
          </Link>
          <Link href="/contact" className={styles.navLink}>
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
