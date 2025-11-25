enum rol {ADMIN="admin", SELLER="seller", CUSTOMER="customer"};

type User = {username:string, role:rol}

const myuser : User = {username:"alvaro", role:rol.ADMIN}


//
import {Camera, CameraResultType, CameraDirection, CameraSource} from "@capacitor/camera"
const takePicture = async() =>{
  const image = await Camera.getPhoto({
    quality:90,
    allowEditing: true,
    resultType: CameraResultType.Base64,
    direction: CameraDirection.Front, //esto se ignora si usas foto
    source: CameraSource.Photos
  })
}
