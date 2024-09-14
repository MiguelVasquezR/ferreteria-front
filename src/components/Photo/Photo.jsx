import { useRef, useState } from "react";
import { MdPhotoCamera } from "react-icons/md";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "../../utils/FirebaseService";
import { useFormContext } from "react-hook-form";

const storage = getStorage(app);

const Photo = () => {
  const refImage = useRef(null);
  const [image, setImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/metodologias-a506d.appspot.com/o/inventario%2Fbitmap.png?alt=media&token=b6700b36-3e1b-485f-a4ab-9961e33ee105"
  );
  const { setValue } = useFormContext();

  const handleChange = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const refArchivo = ref(storage, `inventario/${file.name}`);
      await uploadBytes(refArchivo, file);
      const ulrImDesc = await getDownloadURL(refArchivo);
      if (ulrImDesc !== null) {
        setImage(ulrImDesc);
        setValue("urlImage", ulrImDesc);
      }
    }
  };

  const ImagenEsqueleto = () => {
    return (
      <div>
        <img
          src={image}
          className="bg-[#f2f2f2] w-[120px] h-[120px] rounded-full flex justify-center items-center"
        />
        <MdPhotoCamera
          color="#F58A27"
          size={50}
          className="absolute  right-[-10px] bottom-[-10px]"
        />
      </div>
    );
  };

  return (
    <div
      onClick={() => {
        if (refImage.current) {
          refImage.current.click();
        } else {
          console.log("No existe el ref");
        }
      }}
    >
      <picture className="relative">
        {image ? (
          <div>
            <img
              src={image}
              className="bg-[#f2f2f2] w-[120px] h-[120px] rounded-full flex justify-center items-center"
            />
            <MdPhotoCamera
              color="#F58A27"
              size={50}
              className="absolute  right-[-10px] bottom-[-10px]"
            />
          </div>
        ) : (
          <div className="bg-[#f2f2f2] w-[120px] h-[120px] rounded-full flex justify-center items-center"></div>
        )}
      </picture>
      <input
        type="file"
        ref={refImage}
        style={{ display: "none" }}
        onChange={handleChange}
      />
    </div>
  );
};

export default Photo;
