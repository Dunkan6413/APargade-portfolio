import React, { useEffect, useRef, useState } from "react";

export default function ImageDropZone({ file, onChange }) {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  function pick(selected) {
    if (selected && selected.type.startsWith("image/")) {
      onChange(selected);
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragging(false);
    pick(e.dataTransfer.files[0]);
  }

  function handleRemove(e) {
    e.stopPropagation();
    if (inputRef.current) inputRef.current.value = "";
    onChange(null);
  }

  return (
    <div
      className={`dropzone${dragging ? " is-dragging" : ""}${
        preview ? " has-preview" : ""
      }`}
      role="button"
      tabIndex={0}
      onClick={() => inputRef.current.click()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          inputRef.current.click();
        }
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => pick(e.target.files[0])}
      />

      {preview ? (
        <>
          <img src={preview} alt="Aperçu" className="dropzone-preview" />
          <button
            type="button"
            className="dropzone-remove"
            onClick={handleRemove}
          >
            Retirer
          </button>
        </>
      ) : (
        <p className="dropzone-text">
          Glissez une image ici
          <span>ou cliquez pour parcourir</span>
        </p>
      )}
    </div>
  );
}