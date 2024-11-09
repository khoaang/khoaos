import { useEffect, useState, useRef } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
  onBootText: (text: string[]) => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete, onBootText }) => {
  const [bootText, setBootText] = useState<string[]>([]);
  const [accuracy, setAccuracy] = useState(0);
  const [loss, setLoss] = useState(1.0);
  const [progress, setProgress] = useState(0);
  const currentIndexRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout>();
  const animationIntervalRef = useRef<NodeJS.Timeout>();
  const messagesRef = useRef<string[]>([]);
  
  useEffect(() => {
    messagesRef.current = [
      `

       ╔══════════════════════════════╗
       ║     NEURAL OS v1.0.0         ║
       ║    ▀▄▀▄▀▄  KHOA  ▄▀▄▀▄▀      ║
       ║  [ Neural Network Active ]   ║
       ║  Training Accuracy: ${accuracy.toFixed(1)}%    ║
       ║  Loss: ${loss.toFixed(7)}...          ║
       ╚══════════════════════════════╝
      `,
      ...(progress < 100 ? [
        `Loading... [${'='.repeat(Math.floor(progress/5))}${' '.repeat(20-Math.floor(progress/5))}] ${Math.min(100, progress)}%`
      ] : []),
      "",
      "",
      "system status:",
      "• signals: processed",
      "• machines: learning",
      "• entropy: increasing",
      "",
      "Type 'help' for available commands"
    ];

    if (currentIndexRef.current > 0) {
      const newText = messagesRef.current.slice(0, currentIndexRef.current + 1);
      setBootText(newText);
      onBootText(newText);
    }
  }, [accuracy, loss, progress, onBootText]);

  useEffect(() => {
    // Start the animation interval
    animationIntervalRef.current = setInterval(() => {
      setAccuracy(prev => Math.min(99.9, prev + 2));
      setLoss(prev => Math.max(0.0314159, prev - 0.02));
      setProgress(prev => Math.min(100, prev + 2));
    }, 50);

    // Display messages
    const displayNextMessage = () => {
      if (currentIndexRef.current < messagesRef.current.length) {
        currentIndexRef.current++;
        const newText = messagesRef.current.slice(0, currentIndexRef.current + 1);
        setBootText(newText);
        onBootText(newText);
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        if (animationIntervalRef.current) {
          clearInterval(animationIntervalRef.current);
        }
        setTimeout(onComplete, 1000);
      }
    };

    // Start message display interval
    intervalRef.current = setInterval(displayNextMessage, 300);

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
    };
  }, []); // Empty dependency array since we're using refs

  return (
    <div className="boot-sequence">
      {bootText.map((text, index) => (
        <pre key={index} className="boot-text">{text}</pre>
      ))}
    </div>
  );
};