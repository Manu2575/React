import * as C from './index.styles';

type Props = {
    url: string;
    name: string;
    deleteFunction: (ref: string) => void;
}

export const PhotoItem = ({url, name, deleteFunction}: Props) => {
    return (
        <C.Container>
            <img src={url} alt={name} />
            {name}
            <br />
            {name.toUpperCase()}
            <button onClick={() => deleteFunction(name)}>Deletar</button>
             
        </C.Container>
    );
}
