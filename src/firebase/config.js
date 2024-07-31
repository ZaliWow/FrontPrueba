
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";


const firebaseConfig = {
  apiKey: "AIzaSyBLeXNWPj5w31asyl0m_GeVnjCBmdUpcjs",
  authDomain: "kasaklaus-9b10a.firebaseapp.com",
  projectId: "kasaklaus-9b10a",
  storageBucket: "kasaklaus-9b10a.appspot.com",
  messagingSenderId: "880124052431",
  appId: "1:880124052431:web:4fdb63dfda4821c74388ba"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(file){
   const storageRef = ref(storage,  v4())
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}