import { useState, useEffect, FormEvent} from 'react';
import * as C from './App.styles';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';
import { PhotoItem } from './Components/PhotoItem';

const App = () => {
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const getPhotos = async () => {
    setLoading(true);
    setPhotos(await Photos.getAll());
    setLoading(false);
  }
  useEffect(() =>{
    getPhotos();
  }, []);

  const deleteImage = async (ref: string) => {
    setLoading(true)
    await Photos.deleteImage(ref)
    getPhotos();
  }
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if(file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insert(file);
      setUploading(false);

      if(result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  }
  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de Fotos</C.Header>

        <C.UploadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image"/>
          <input type="submit" value="enviar"/>
          {uploading && "Enviando..."}
        </C.UploadForm>

        {loading &&
        <C.ScreenWarning>
          <div className='emoji'>🤚</div>
          <div>Carregando...</div>
        </C.ScreenWarning>
        }

        {! loading && photos.length > 0 &&
          <C.PhotoList>
            {photos.map((item, index)=>(
              <PhotoItem key={index} url={item.url} name={item.name} deleteFunction={deleteImage}/>
            ))}
          </C.PhotoList>
        }

        {! loading && photos.length === 0 &&
          <C.ScreenWarning>
            <div className='emoji'>😵‍💫</div>
            <div>Não há fotos cadastradas.</div>
          </C.ScreenWarning>
        }
      </C.Area>
    </C.Container>
  );
}

export default App;