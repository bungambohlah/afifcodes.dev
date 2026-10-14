export default function BgAnimation(): React.JSX.Element {
  return (
    <div className='bg-animation-context'>
      <div className='bg-animation-area'>
        <ul className='bg-animation-circles'>
          {[...Array.from({ length: 21 }).keys()].slice(1).map((num) => (
            <li key={`animate-${num}`} />
          ))}
        </ul>
      </div>
    </div>
  );
}
