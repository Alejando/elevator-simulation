const ControlPanel = ({ currentFloor, direction, startSimulation, cleanLog }) => {
  return (
    <div className="border p-4 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Panel de Control</h2>
      <p className="mb-2">Piso Actual: <strong>{currentFloor}</strong></p>
      <p className="mb-4">Dirección: <strong>{direction}</strong></p>
      <button
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={startSimulation}
      >
        Iniciar Simulación
      </button>
      <button
        className="p-2 bg-red-500 text-white rounded hover:bg-red-600 mt-2"
        onClick={cleanLog}
      >
        Limpiar Registro
      </button>
    </div>
  );
};

export default ControlPanel;