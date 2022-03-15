import ArrayBonic from "./ArrayBonic";

export default function intercalar({ array1, array2 }) {
  let arrayConcatenat = [];
  for (let i = 0; i < array1.length || i < array2.length; i++) {
    arrayConcatenat.push(array1[i]);
    arrayConcatenat.push(array2[i]);
  }

  return (
    <div>
      <h1> Array concatenat</h1>
      <div>
        arrays original 1:
        <ArrayBonic array={array1} />
        <br />
        array original 2: <ArrayBonic array={array2} />
        <br />
        array concatenat: <ArrayBonic array={arrayConcatenat} />
      </div>
    </div>
  );
}
