import * as Yup from 'yup';
import FormTableManager from '../shared/components/FormTableMannager';
import { Container } from '../shared/components';

const Dashboard = () => {
  const formElements = [
    {
      type: 'text',
      name: 'nombre',
      label: 'Nombre de la categoría',
      placeholder: 'Ej: Camisas',
    },
    {
      type: 'text',
      name: 'imagen',
      label: 'URL de la imagen',
    },
    {
      type: 'select',
      name: 'padre',
      label: 'Categoría Padre',
      options: [
        { value: '', label: '-- Ninguna --' },
        { value: 'Hombre', label: 'Hombre' },
        { value: 'Mujer', label: 'Mujer' },
        { value: 'Niños', label: 'Niños' },
      ],
    },
    {
      type: 'button',
      label: 'Crear categoría',
      submit: true,
    },
  ];

  const initialValues = {
    nombre: '',
    imagen: '',
    padre: '',
  };

  const validationSchema = Yup.object({
    nombre: Yup.string().required('Requerido'),
    imagen: Yup.string().url('Debe ser una URL válida').required('Requerido'),
  });

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'nombre', label: 'Nombre' },
    { key: 'padre', label: 'Categoría Padre' },
    {
      key: 'imagen',
      label: 'Imagen',
      render: (item) => (
        <a href={item.imagen} target="_blank" rel="noreferrer">
          <img
            src={item.imagen}
            alt={item.nombre}
            className="imagen-miniatura"
          />
        </a>
      ),
    },
  ];

  const actions = [
    {
      label: 'Editar',
      onClick: (item, items, setItems) => {
        const nuevoNombre = prompt('Nuevo nombre:', item.nombre);
        if (nuevoNombre !== null && nuevoNombre.trim() !== '') {
          const actualizados = items.map((i) =>
            i.id === item.id ? { ...i, nombre: nuevoNombre } : i
          );
          setItems(actualizados);
        }
      },
    },
    {
      label: 'Eliminar',
      onClick: (item, items, setItems) => {
        if (window.confirm(`¿Eliminar "${item.nombre}"?`)) {
          setItems(items.filter((i) => i.id !== item.id));
        }
      },
    },
  ];

  return (
    <Container>
      <FormTableManager
        title="Gestión de Categorías"
        formElements={formElements}
        initialValues={initialValues}
        validationSchema={validationSchema}
        columns={columns}
        actions={actions}
        keyField="id"
      />
    </Container>
  );
};

export default Dashboard;
