import { useContext } from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import { Context } from '../store/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    
    const { actions } = useContext(Context);
    const fav = <FontAwesomeIcon icon={faHeart} />
    const handleSubmit =()=>{
        actions.addFavorite(props.name);
    };

    return (
        <div>
            <div className=" card m-3 border border-dark bg-warning shadow-lg">
                <div 
                style={{ borderRadius: '5px' }}
                className='border border-dark m-3 shadow-lg bg-info'>
                    <h5 className='m-1 text-center'># {props.id}</h5>
                </div>

                <div 
                style={{ borderRadius: '5px' }} 
                className='border border-dark bg-light m-3 shadow-lg d-flex justify-content-center align-items-center+'>
                    <img className='imgContainer bg-light imgLarge '
                        src={props.img}
                        alt={props.name} />
                </div>

                <div className="card-body">
                    <h3 className="card-title text-center">{props.name}</h3>
                    <h4 className="card-text text-center">{props.types}</h4>

                    <div 
                    style={{ borderRadius: '5px' }}
                    className='p-2 shadow-lg bg-info d-flex justify-content-between border border-dark'>
                        <Link 
                        to={"pokemon/" + props.number}
                        className="btn btn-primary border border-dark shadow-lg"
                        
                        >Read more...</Link>
                        
                        <button 
                        to="#" 
                        className="btn btn-danger border border-dark shadow-lg"
                        onClick={handleSubmit}
                        >{fav}</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Card;