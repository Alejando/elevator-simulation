import { useState } from 'preact/hooks';
import Elevator from './Elevator';
import ControlPanel from './ControlPanel';
import ActivityLog from './ActivityLog';

const ElevatorLogic = () => {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [direction, setDirection] = useState('parado');
  const [requests, setRequests] = useState([]);
  const [log, setLog] = useState([]);

  const floors = [1, 2, 3, 4, 5];

  const handleRequest = (floor) => {
    if (!requests.includes(floor)) {
      setRequests((prev) => [...prev, floor]);
      setLog((prev) => [...prev, `Solicitud recibida para el piso ${floor}`]);
    }
  };

  const startSimulation = async () => {
    console.log('Iniciando simulación...');
    setLog((prev) => [...prev, 'Iniciando simulación...']);
    const sortedRequests = [...requests].sort((a, b) =>
      direction === 'subiendo' ? a - b : b - a
    );

    for (const nextFloor of sortedRequests) {
      setDirection(nextFloor > currentFloor ? 'subiendo' : 'bajando');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setCurrentFloor(nextFloor);
      setLog((prev) => [...prev, `Elevador llegó al piso ${nextFloor}`]);
    }

    setRequests([]);
    setDirection('parado');
    setLog((prev) => [...prev, 'Simulación completada. El elevador está parado.']);
  };

  return (
    <div className="flex gap-8">
      <Elevator
        floors={floors}
        currentFloor={currentFloor}
        handleRequest={handleRequest}
      />
      <ControlPanel
        currentFloor={currentFloor}
        direction={direction}
        startSimulation={startSimulation}
      />
      <ActivityLog log={log} />
    </div>
  );
};

export default ElevatorLogic;