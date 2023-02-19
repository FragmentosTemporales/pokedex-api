import { Link } from 'react-router-dom'
import '../App.css';
const Card = (props) => {
    return (
        <div>
            <div className=" card m-3 border border-dark bg-warning shadow-lg">
                <div className='border border-dark m-3 shadow-lg bg-info'>
                    <h5 className='m-1'>ID: # {props.id}</h5>
                </div>

                <div className='m-3 shadow-lg bg-light d-flex justify-content-center align-items-center+'>
                    <img className='bg-light'
                        src={props.img}
                        alt={props.name} />
                </div>

                <div className="card-body">
                    <h5 className="card-title">Name: {props.name}</h5>
                    <p className="card-text"> Type: {props.types}</p>

                    <div className='p-2 shadow-lg bg-info d-flex justify-content-between border border-dark'>
                        <Link to="/profile/pokemon/" className="btn btn-dark border border-white shadow-lg">Read more...</Link>
                        <Link to="/profile" className="btn btn-light border border-dark shadow-lg">Favs</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Card;