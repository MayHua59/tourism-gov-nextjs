import React from "react";
import styles from "./AttachmentTable.module.css";

export default function AttachmentTable({ attachments }) {
  if (!attachments || attachments.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Attachments</h2>
      <div className={styles.tableWrap}>
        <table className={styles.table} aria-label="Attachments table">
          <thead>
            <tr>
              <th>No</th>
              <th>File Name</th>
              <th>File Type</th>
              <th>File Size</th>
              <th>Download Link</th>
            </tr>
          </thead>
          <tbody>
            {attachments.map((att, idx) => (
              <tr key={att.id ?? idx}>
                <td>{idx + 1}</td>
                <td className={styles.fileName}>{att.file_name}</td>
                <td>{(att.file_type || "").toUpperCase()}</td>
                <td>
                  {typeof att.file_size === "number" ? `${att.file_size} MB` : "-"}
                </td>
                <td>
                  <a
                    className={styles.downloadLink}
                    href={att.file_path}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={att.file_name}
                  >
                    View File
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}