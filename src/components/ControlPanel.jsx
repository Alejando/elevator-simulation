const ControlPanel = ({ currentFloor, direction, startSimulation }) => {

  return (
    <div className="border p-4">
      <h2 className="text-xl font-bold">Panel de Control</h2>
      <p>Piso Actual: {currentFloor}</p>
      <p>Dirección: {direction}</p>
      <button
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={startSimulation}
      >
        Iniciar Simulación
      </button>
    </div>
  );
};

export default ControlPanel;