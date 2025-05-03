"use client"


import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/types";
import styles from "@/styles/modules/card.module.css";
import Image from "next/image";
import { Eye } from 'lucide-react';

interface CardProps extends Project {}

const Card = ({ title, description, thumbnail, url }: CardProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <Image src={thumbnail} alt={title} fill />
      </div>

      <div className={styles.content}>
        <div className={styles.titleCard}>
          <h3>{title}</h3>
          <a title="View Project" href={url} target="_blank" rel="noreferrer">
            <Button
              title="View"
              variant="primary"
              icon={Eye}
              size="small"
              
            />
          </a>
        </div>

        <p className={!expanded ? styles.truncate : ""}>{description}</p>

        {description.length > 50 && (
          <button
            onClick={toggleDescription}
            style={{
              background: "none",
              border: "none",
              color: "#00ffcc",
              cursor: "pointer",
              padding: 0,
              fontWeight: "bold",
              fontSize: "0.9rem"
            }}
          >
            {expanded ? "See less" : "See more"}
          </button>
        )}
      </div>
    </div>
  );
};

export { Card };
