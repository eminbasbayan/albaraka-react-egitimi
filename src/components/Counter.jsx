import { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('Emre');

  useEffect(() => {
    console.log("component DOM'a ilk kez yüklendiğinde çalışır!");
  }, []);

  useEffect(() => {
    console.log(
      'component DOM`a ilk kez yüklendiğinde ve deps içindeki değerler güncellendiğinde çalışır!',
    );
  }, [title]);

  const arttir = () => setCount((prev) => prev + 1);
  const azalt = () => setCount((prev) => prev - 1);

  return (
    <div>
      <p>{title}</p>
      <button onClick={() => setTitle('Ahmet')}>Title Değiştir!</button>
      <br />
      <br />
      <br />
      <button onClick={arttir}>Arttır</button>
      <b>{count}</b>
      <button onClick={azalt}>Azalt</button>
    </div>
  );
};

export default Counter;
