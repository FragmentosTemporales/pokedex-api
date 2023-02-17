import { Link } from 'react-router-dom'
const Card = (props) => {
    return (
        <div>
            <div className="col-3 card m-3 border border-dark bg-warning shadow-lg">
                <div className='border border-dark m-3 shadow-lg bg-info'>
                    <h5 className='m-1'>{props.name}</h5>
                </div>

                <div className='border border-dark m-3 shadow-lg'>
                    <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
                        className="card-img-top bg-light"
                        alt="Pokemon" />
                </div>

                <div className="card-body">
                    <h5 className="card-title">{props.url}</h5>
                    <p className="card-text"> Type </p>

                    <div className='p-2 shadow-lg bg-info d-flex justify-content-between border border-dark'>
                        <Link to="/profile/:name" className="btn btn-dark border border-white shadow-lg">Read more...</Link>
                        <Link to="/profile" className="btn btn-light border border-dark shadow-lg">Favs</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Card;