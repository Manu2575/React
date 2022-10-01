import './Card.css';

function Card(props) {

    return (
    <div className='Card'>
        <strong>{props.name}</strong>
        <small>{props.time}</small>
     </div>
    );
}

export default Card;