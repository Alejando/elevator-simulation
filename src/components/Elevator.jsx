const Elevator = ({ floors, currentFloor, handleRequest }) => {
  return (
    <div className="border p-4">
      <h2 className="text-xl font-bold">Elevador</h2>
      <div className="relative h-96 w-20 border bg-gray-200">
        <div
          className="absolute bg-blue-500 text-white w-full h-10 flex items-center justify-center"
          style={{ top: `${100 - (currentFloor - 1) * 20}%` }}
        >
          Piso {currentFloor}
        </div>
      </div>
      <div className="mt-4">
        {floors.map((floor) => (
          <button
            key={floor}
            className="p-2 bg-green-500 text-white rounded mb-2 hover:bg-green-600"
            onClick={() => handleRequest(floor)}
          >
            Llamar al Piso {floor}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Elevator;