"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";
import styles from "@/components/Header/header.module.css";
import { SEA_COMMON } from "@/consts/common/text";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // ← 200ms のディレイ（お好みで調整）
  };

  return (
    <header className={styles.header}>
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
                <Link href="/company/privacy" className={styles.dropdownItem}>
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
