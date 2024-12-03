const Elevator = ({ floors, currentFloor, handleRequest, queue }) => {
  return (
    <div className="basis-1/4 border p-4 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Elevador</h2>
      <div
        className="relative w-20 border bg-gray-200"
        style={{ height: `${floors.length * 50}px` }}
      >
        <div
          className="absolute bg-blue-500 text-white w-full h-10 flex items-center justify-center"
          style={{
            top: `${100 - ((currentFloor - 1) / (floors.length - 1)) * 100}%`,
            transition: 'top 1s ease-in-out',
          }}
        >
          Piso {currentFloor}
        </div>
      </div>
    </div>
  );
};

export default Elevator;