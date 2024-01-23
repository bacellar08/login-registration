import { useEffect, useState } from "react";
import "dropzone/dist/dropzone.css";
import Dropzone from "dropzone";
import "./index.css"


const FileUpload = ({ onImageUrlChange }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const myDropzone = new Dropzone("#my-dropzone", {
      url: "http://localhost:3001/upload",
      acceptedFiles: "image/jpeg, image/png",
      maxFiles: 1,
      addRemoveLinks: true,
      init: function () {
        this.on("success", function (file, response) {
          // Atualiza o estado com a URL da imagem
          setImageUrl(response.imageUrl);
          // Chama a função de callback passada por prop para enviar a URL para o componente pai (App)
          onImageUrlChange(response.imageUrl);
        });
      },
    });

    // Limpa a Dropzone quando o componente é desmontado
    return () => myDropzone.destroy();
  }, []);

  return (
    <div>
      <div id="my-dropzone" className="p-20 h-52 w-52 bg-white rounded-md dropzone border-none">
      </div>
    </div>
  );
};

export default FileUpload;