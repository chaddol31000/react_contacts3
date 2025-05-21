import React, { useState } from 'react'

// npm install package.json = 모듈을 설치하는 명령어
// git 에 올릴 때는 모듈을 제외한 public, src 만 올리기 (파일이 너무 커짐)

// 상태와 그 상태를 처리하는 함수를 분리 : hook → use 어쩌구 / 커스텀 훅

function useCounter(initialValue=1) {
  const [value, setValue] = useState(initialValue);
  const inc=()=> setValue(prev=>prev+1);
  const dec=()=> setValue(prev=>prev-1);

  return {value, inc, dec};
}

function HookTest1() {
  const {value, inc, dec} = useCounter(1);
  return (
    <div>
      <div>{value}</div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  )
}

export default HookTest1