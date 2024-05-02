// ProductHeader.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/ribbons/floorplansHeader.module.css'; 

const FloorplansHeader: React.FC = () => {
  return (
    <header className={`${styles.footerBg} mt-auto py-3`}> 
    <div className="container-fluid d-flex justify-content-start align-items-center">
        <div className="me-auto">
        <Link href="/" >
          <Image
            src="/TopLeftLogoFloorplans.png"
            alt="Floorspaces Logo"
            width="280"
            height="30"
          />
        </Link>
        </div>
        <div className="flex-grow-1"></div>
        <div className={`${styles.footerText} me-3`}> 
          <small>This is a sandbox test of viewing a floor model, no user integration yet.</small>
        </div>
      </div>
    </header>
  );
};

export default FloorplansHeader;
