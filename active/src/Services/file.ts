import { Photo } from '../Types/arquivo';
import { storage } from '../Libs/firebase';
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { v4 as createId } from 'uuid';

export const getAll = async () => {
    let list: Photo[] = [];

    const imagesFolder = ref(storage, "images");
    const photoList = await listAll(imagesFolder);

    for(let i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        });
    }

    return list;
}

export const insert = async (file: File) => {
    if(['text/csv'].includes(file.type)){

        let randomName = createId();
        let newFile = ref(storage, `images/${randomName}`);

        let upload = await uploadBytes(newFile, file);
        let photoUrl = await getDownloadURL(upload.ref);

        return { name: upload.ref.name, url: photoUrl } as Photo;
    } else {
        return new Error('Tipo de arquivo não permitido.');
    }
}

// Create a reference to the file to delete
export const deleteImage = async (imageRef: string) => {
    const deleteRef = ref(storage, `images/${imageRef}`);

    // Delete the file
    return deleteObject(deleteRef).then(() => {
    // File deleted successfully
    }).catch((error) => {
        
        return new Error('Falha ao deletar o arquivo.');
  // Uh-oh, an error occurred!
    });
}

