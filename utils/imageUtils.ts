export const resizeImageToBase64 = (
  file: File,
  maxWidth = 1080,
  maxHeight = 1920
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      if (!e.target?.result) return;
      img.src = e.target.result as string;
    };

    img.onload = () => {
      const canvas = document.createElement("canvas");

      let { width, height } = img;
      const aspectRatio = width / height;

      if (width > maxWidth || height > maxHeight) {
        if (aspectRatio > maxWidth / maxHeight) {
          width = maxWidth;
          height = maxWidth / aspectRatio;
        } else {
          height = maxHeight;
          width = maxHeight * aspectRatio;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject("Canvas not supported");

      ctx.drawImage(img, 0, 0, width, height);
      const resizedBase64 = canvas.toDataURL("image/jpeg", 0.9); 
      resolve(resizedBase64);
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
