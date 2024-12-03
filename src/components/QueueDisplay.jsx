const QueueDisplay = ({ queue }) => {
  return (
    <div className="basis-1/4 border p-4 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Pisos en Cola</h2>
      <div className="flex flex-wrap gap-2">
        {queue.length > 0 ? (
          queue.map((floor, index) => (
            <span
              key={index}
              className="bg-gray-200 border px-3 py-1 rounded text-lg"
            >
              Piso {floor}
            </span>
          ))
        ) : (
          <p className="text-gray-500">No hay pisos en cola</p>
        )}
      </div>
    </div>
  );
};

export default QueueDisplay;