const ActivityLog = ({ log }) => {
  return (
    <div className="basis-1/4 border p-4">
      <h2 className="text-xl font-bold">Registro de Actividad</h2>
      <div className="overflow-y-auto h-96 bg-gray-50 p-2 border">
        {log.map((entry, index) => (
          <p key={index}>{entry}</p>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;