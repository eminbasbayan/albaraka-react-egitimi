import { useRef } from 'react';

export default function TextInputWithFocusButton() {
  // 1. Adım: Ref tanımlanır
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // 3. Adım: DOM elementine erişilir ve focus olunur
    console.log(inputEl.current);

    inputEl.current.focus();
  };

  return (
    <>
      {/* 2. Adım: Tanımlanan ref ilgili elemente bağlanır */}
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Input'a Odaklan</button>
    </>
  );
}
