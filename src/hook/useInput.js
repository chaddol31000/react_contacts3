import React, { useState } from 'react'

// 상태와 함수의 결합 → 커스텀 훅(하나의 함수에 대하여 값과 에러메시지를 각각 가지고 있음), context(전체가 값과 에러메시지를 공유함)

function useInput(msg) {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const change=e=>setValue(e.target.value);

  const check=()=> {
    setMessage('');
    if(value==='') {
      setMessage(msg);
      return false;
    }
    return true;

  }
  return {value, message, change, check, setValue};
}

export default useInput