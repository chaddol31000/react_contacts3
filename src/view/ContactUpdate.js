import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

function ContactUpdate() {
  // useFetch
  // Too many re-renders. = 무한 루프
  // 무한루프가 걸리는 이유? = useFetch도 상태를 잡고 있고 useInput 도 상태를 잡고 있어서 계속 상태가 바뀌고 재랜더링을 하기 때문
  // 커스텀 훅을 쓰는 이유는 코드를 간결하게 쓰려고 하는 거임

  // useFetch 로 데이터를 받아와 useInput 을 업데이트하면 상태가 바뀌면서 재랜더링 → useFetch() → 무한 루프 발생
  // useFetch 를 사용하지 않고 수동으로 처리하겠다
  const [contact, setContact] = useState({no:0, name:'', address:'', tel:''});
  const [photo, setPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  
  return (
    <div>ContactUpdate</div>
  )
}

export default ContactUpdate