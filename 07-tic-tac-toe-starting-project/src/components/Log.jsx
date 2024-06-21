export default function Log({ log }) {
  return (
    <ol id="log">
      {log.map((logEntry, index) => (
        <li key={index}>{logEntry}</li>
      ))}
    </ol>
  );
}
