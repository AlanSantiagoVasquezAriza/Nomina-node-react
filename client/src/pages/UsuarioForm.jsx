import { Form, Formik } from 'formik';
import { UseUsers } from '../context/UserProvider';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function UsuarioForm() {

  const { createUser, getUser, updateUser } = UseUsers();
  const [user, setUser] = useState({
      id: '',
      nombre: '',
      apellido: '',
      sexo: '',
      salario: '',
      dias_trabajo: '',
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    const loadUser = async () => {
      if (params.id) {

        const userResponse = await getUser(params.id);

        setUser(
          {
            id: userResponse[0].ID,
            nombre: userResponse[0].NOMBRE,
            apellido: userResponse[0].APELLIDO,
            sexo: userResponse[0].SEXO ,
            salario: userResponse[0].SALARIO,
            dias_trabajo: userResponse[0].DIAS_TRABAJO
          }
      );
        console.log(userResponse[0]);
      }
    };

    loadUser();

  }, []);

  return (
    <div>

      <h1>{params.id ? "Editar Usuario" : "Crear Usuario"}</h1>

      <Formik

        initialValues={user}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if(params.id){
            await updateUser(params.id, values)
            navigate('/get');
          }else{
            await createUser(values);
          }
          setUser({
            id: '',
            nombre: '',
            apellido: '',
            sexo: '',
            salario: '',
            dias_trabajo: ''
          });
          actions.resetForm();

        }}>

        {({ handleChange, handleSubmit, values, isSubmitting }) => (


          <Form onSubmit={handleSubmit}>

            <label>Id</label>
            <input type="text" id="id" name="id" onChange={handleChange} value={values.id} />
            <br />
            <br />
            <label>Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder='Pepito' onChange={handleChange} value={values.nombre} />
            <br />
            <br />
            <label>Apellido</label>
            <input type="text" id="apellido" name="apellido" placeholder='Perez' onChange={handleChange} value={values.apellido} />
            <br />
            <br />
            <label>Sexo</label>
            <input type="text" id="sexo" name="sexo" placeholder='Masculino' onChange={handleChange} value={values.sexo} />
            <br />
            <br />
            <label>salario</label>
            <input type="text" id="salario" name="salario" placeholder='1300000' onChange={handleChange} value={values.salario} />
            <br />
            <br />
            <label>dias_trabajo</label>
            <input type="text" id="dias_trabajo" name="dias_trabajo" placeholder='30' onChange={handleChange} value={values.dias_trabajo} />
            <br />
            <br />
            {
              values.dias_trabajo > 0 && values.dias_trabajo <= 30 &&
              <button type='submit' disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            }

          </Form>

        )}

      </Formik>
    </div>
  );
}

export default UsuarioForm;