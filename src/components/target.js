import '../App.css';

const Target = (props) => {
    const capitalizeName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };
    const clickNext = () => {
        const nextId = parseInt(props.id) + 1;
        const limitedNextId = nextId > 1008 ? 1 : nextId;
        window.location.replace(`http://localhost:3000/pokemon/${limitedNextId}`);
    };
    const clickBack = () => {
        const nextId = parseInt(props.id) - 1;
        const limitedNextId = nextId < 1 ? 1008 : nextId;
        window.location.replace(`http://localhost:3000/pokemon/${limitedNextId}`);
    };
    return (
        <div 
        style={{ borderRadius: '5px' }}
        className="container border border-dark bg-success mt-2 mb-2 shadow-lg ">
             <div 
             style={{ borderRadius: '10px' }}
             className='d-flex justify-content-between m-2 bg-warning border border-dark shadow-lg'>
                <button className='btn btn-dark' onClick={clickBack} >Back</button>
                <button className='btn btn-dark' onClick={clickNext} >Next</button>
            </div>
            <div 
            style={{ borderRadius: '5px' }}
            className="row m-2 bg-light shadow-lg border border-dark">
                <div className="imgContainer col-6 d-flex justify-content-center" >
                    <img
                        src={props.img}
                        alt={props.name}
                        style={{ height: '100%'}} />
                </div>
                <div className="col-6 bg-warning shadow-lg">
                    <div className=" m-2">
                        <div>
                            <h1 className="text-center bg-light shadow-lg">{props.name}</h1>
                            <h4 className="text-center">#{props.id}</h4>
                            <h4 className="text-center text-capitalize">Type: {props.types}</h4>
                        </div>

                        <div className="d-flex flex-column">
                            <h3 className="text-center">Features</h3>
                            <ul className="list-group m-2 shadow-lg">
                                <li className="list-group-item">Height: {props.height}</li>
                                <li className="list-group-item">Weight: {props.weight}</li>
                            </ul>
                            <div>
                                <h3 className="text-center">Abilities</h3>
                                <ul className="list-group m-2 shadow-lg">
                                    {props.abilities.map((ability, index) => (
                                        <li className="list-group-item" key={index}>{ability}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-center">Stats</h3>
                                <ul className="list-group m-2 shadow-lg">
                                    {props.stats.map((stat, index) => (
                                        <li className="list-group-item text-capitalize" key={index}>
                                            <span>{capitalizeName(stat.name)}: </span>
                                            <span>{stat.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default Target;