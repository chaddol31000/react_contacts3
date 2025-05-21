import React from 'react'
import { Spinner } from 'react-bootstrap'

function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height:"600px"}}> 
      <Spinner animation="border" role="status" />
    </div>
  )
}

export default LoadingSpinner


/*
  1. 부모에 display : flex css 를 지정하면 부모의 속성으로 자식들을 배치할 수 있다
  2. 자식들은 기본 행방향으로 배치된다
  justify-content : 정렬 방향과 같은 방향
  align-item  : 정렬 방향과 반대 방향
  <div style='display:flex'>
    <div>A</div>
    <div>B</div>
  </div>

*/