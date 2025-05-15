"use client";

import styles from "@/components/CEOMessage/CEOMessage.module.css";
import { SEA_COMMON } from "@/consts/common/text";
import { motion } from "framer-motion";
import Image from "next/image";

const CEOMessage = () => {
  return (
    <section className={styles.ceoMessage}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className={styles.title}>代表挨拶</h2>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image
              src="/ceo.png"
              alt="代表の写真"
              width={200}
              height={200}
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <p className={styles.message}>{SEA_COMMON.COMMENT.CEO_GREETING1}</p>
            <p className={styles.name}>
              {SEA_COMMON.COMPANY_NAME}
              <br />
              {SEA_COMMON.CEO_NAME}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CEOMessage;
