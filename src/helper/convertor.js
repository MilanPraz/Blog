export default function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const filereader = new FileReader();
    if (file && file.type.match("image.*")) {
      filereader.readAsDataURL(file);
    }
    filereader.onloadend = () => {
      resolve(filereader.result);
    };
    filereader.onerror = (error) => {
      reject(error);
    };
  });
}
