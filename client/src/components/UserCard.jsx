import { UseUsers } from '../context/UserProvider';
import { useNavigate } from 'react-router-dom';

function UserCard({ user }) {

    const { deleteUser } = UseUsers();
    const navigate = useNavigate();

    // Nomina calculation
    const subsidio_transport = 162000;

    const salario = (user.SALARIO * user.DIAS_TRABAJO / 30).toFixed(2);
    const salarioNum = parseFloat(salario); // Convertir a número

    const subsidio = user.SALARIO <= 1300000 ? (subsidio_transport * user.DIAS_TRABAJO / 30).toFixed(2) : '0.00';
    const subsidioNum = parseFloat(subsidio); // Convertir a número

    const total_devengos = (salarioNum + subsidioNum).toFixed(2);

    const salud = (salarioNum * 0.04).toFixed(2);
    const saludNum = parseFloat(salud); // Convertir a número

    const pension = (salarioNum * 0.04).toFixed(2);
    const pensionNum = parseFloat(pension); // Convertir a número

    const total_deducciones = (saludNum + pensionNum).toFixed(2);
    const total_deduccionesNum = parseFloat(total_deducciones); // Convertir a número

    const Total_pagar = (parseFloat(total_devengos) - total_deduccionesNum).toFixed(2);


    return (
        <div>
            <h2>{user.NOMBRE} {user.APELLIDO}</h2>
            <h4>ID: {user.ID}</h4>
            <h4>Genero: {user.SEXO}</h4>
            <p> - Salario: <b> {salario}$ </b></p>
            <p> - Subsidio de transporte: <b>{subsidio}$</b></p>
            <p> - Salud: <b>{salud}$</b></p>
            <p> - Total devengos: <b>{total_devengos}$</b></p>
            <p> - Pension: <b>{pension}$</b></p>
            <p> - Total deducciones: <b>{total_deducciones}$</b></p>
            <p> - Total a pagar: <b>{Total_pagar}$</b></p>

            <div>
                <button onClick={() => deleteUser(user.ID)}>
                    Delete
                </button>
                <button onClick={() => { navigate(`/edit/${user.ID}`) }}>
                    Edit
                </button>
            </div>
            <br />
            <hr />
        </div>
    );
}

export default UserCard;