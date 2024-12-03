const Buttons = ({ floors, handleRequest, queue }) => {
  return (
    <div className="border p-4 w- full">
      <h2 className="text-xl font-bold w-full text-center mb-4">Pisos</h2>
      {floors.map((floor) => (
        <button
          key={floor}
          className={`p-2 rounded mb-2 mr-2 min-w-24 ${
            queue.includes(floor)
              ? 'bg-red-500 text-white hover:bg-red-700'
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
          onClick={() => handleRequest(floor)}
        >
          Piso {floor}
        </button>
      ))}
    </div>
  );
};

export default Buttons;