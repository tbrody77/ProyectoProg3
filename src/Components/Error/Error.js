import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Error(){
    return(
        <div>
            
                <p className='error'>ERROR 404 NOT FOUND</p>
            <Link to={`/`} >
                <p className='albumDe'>Pulse aquí para volver al inicio</p>
            </Link>
        </div>
    )
}
export default Error;