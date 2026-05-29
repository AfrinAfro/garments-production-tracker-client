import { useState } from "react";

const ImageUpload = ({
  label,
  setImage,
}) => {
  const [preview, setPreview] =
    useState(null);

  const handleChange = e => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);

    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="space-y-3">
      <label
        className="
          text-sm
          font-semibold
          text-gray-300
        "
      >
        {label}
      </label>

      <input
        type="file"
        onChange={handleChange}
        className="
          block
          w-full
          text-sm
          text-gray-300
        "
      />

      {preview && (
        <img
          src={preview}
          alt="preview"
          className="
            h-40
            w-full
            rounded-2xl
            object-cover
            border
            border-white/10
          "
        />
      )}
    </div>
  );
};

export default ImageUpload;