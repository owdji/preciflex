
// function Box({ endX }) {
//   const noRevert = useRef();
  
//   useGSAP(() => {
//     gsap.to(noRevert.current, {
//       x: endX,
//       duration: 1,
//       delay:0.5,
//     });
//   }, [endX]); // the animation retains it's current value and doesn't get reverted when the prop changes
  
//   return <div ref={noRevert} className="box gradient-blue">not reverted</div>;
// }

// function App() {
//   const [endX, setEndX] = useState(0);

//   return (
//     <div className="app">
//       <button onClick={() => setEndX(randomX())}>
//         Pass in a randomized value : {endX}
//       </button>
//       <Box endX={endX}>{endX}</Box>
//       <Circle endX={endX}>{endX}</Circle>
//     </div>
//   );
// }