import { useState } from 'preact/hooks';
import Elevator from './Elevator';
import Buttons from './Buttons';
import QueueDisplay from './QueueDisplay';
import ControlPanel from './ControlPanel';
import ActivityLog from './ActivityLog';

const ElevatorLogic = ({ totalFloors = 10 }) => {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [direction, setDirection] = useState('parado');
  const [queue, setQueue] = useState([]);
  const [log, setLog] = useState([]);
  const [isSimulating, setIsSimulating] = useState(false);

  const floors = Array.from({ length: totalFloors }, (_, i) => i + 1);

  const handleRequest = (floor) => {
    if (isSimulating) {
      setLog((prev) => [...prev, `No se puede añadir el piso ${floor} durante la simulación.`]);
      return;
    }

    setQueue((prevQueue) => {
      if (prevQueue.includes(floor)) {
        setLog((prev) => [...prev, `Piso ${floor} removido de la cola.`]);
        return prevQueue.filter((f) => f !== floor);
      } else {
        setLog((prev) => [...prev, `Piso ${floor} añadido a la cola.`]);
        return [...prevQueue, floor];
      }
    });
  };

  const startSimulation = async () => {
    if (isSimulating || queue.length === 0) {
      setLog((prev) => [...prev, 'No hay pisos en la cola o la simulación ya está activa.']);
      return;
    }

    setIsSimulating(true);
    setLog((prev) => [...prev, 'Iniciando simulación...']);

    let localQueue = [...queue].sort((a, b) => a - b);
    let currentDirection = 'subiendo';

    while (localQueue.length > 0) {
      const nextFloor = localQueue.find(
        (floor) =>
          (currentDirection === 'subiendo' && floor >= currentFloor) ||
          (currentDirection === 'bajando' && floor <= currentFloor)
      );

      if (!nextFloor) {
        currentDirection = currentDirection === 'subiendo' ? 'bajando' : 'subiendo';
        continue;
      }

      localQueue = localQueue.filter((floor) => floor !== nextFloor);
      setQueue((prevQueue) => prevQueue.filter((floor) => floor !== nextFloor));

      setDirection(currentDirection);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setCurrentFloor(nextFloor);
      setLog((prev) => [...prev, `Elevador llegó al piso ${nextFloor}.`]);
    }

    setQueue([]);
    setDirection('parado');
    setLog((prev) => [...prev, 'Simulación completada. El elevador está parado.']);
    setIsSimulating(false);
  };

  return (
    <div className="flex flex-row-4 gap-4 bg-white">
      {/* Fila 1: Elevador */}
      <Elevator floors={floors} currentFloor={currentFloor} queue={queue} className="basis-1/4" />

      {/* Fila 2: Botones y Panel de Control */}
      <div className="basis-1/4 flex justify-between gap-4">
        <Buttons
          floors={floors}
          handleRequest={handleRequest}
          queue={queue}
          className="basis-1/2"
        />
        <ControlPanel
          currentFloor={currentFloor}
          direction={direction}
          startSimulation={startSimulation}
          cleanLog={() => setLog([])}
          className="basis-1/2"
        />
      </div>

      {/* Fila 3: Display de la Cola */}
      <QueueDisplay queue={queue} />

      {/* Fila 4: Registro de Actividad */}
      <ActivityLog log={log} />
    </div>
  );
};

export default ElevatorLogic;