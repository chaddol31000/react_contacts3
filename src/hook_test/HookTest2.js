import axios from 'axios';
import React, { useEffect, useState } from 'react'

// api 를 get 으로 읽어오는 기능을 분리
function useContacts(url) {
  // 화면을 읽어올 때는 useEffect
  // useEffect 로 주소를 주면 상태를 저장해야함
  const [data, setData] = useState(null);
  // loading 은 스피너가 돌면서 시작하기 때문에 true
    // 컴퍼넌트에서 읽어오는 부분만 가져왔기 때문
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {                                                                                                                                                                  
    if(!url)
      return;
  
      // finally : 성공하든 실패하든 무조건 실행
        // ex) 게임 설치 → 설치에 성공하든 실패하든, 설치 관련 작업 파일은 삭제하라

      axios.get(url).then(res=>setData(res.data)).catch(err=>setError(err)).finally(()=>setLoading(false));
    },[]);

  return {data, loading, error};
}

function HookTest2() {
  const {data, loading,error} = useContacts('https://sample.bmaster.kro.kr/contacts');
  console.log("==================")
  
  if(loading) return <div>로딩 중...</div>
  if(error) return <div>{error.message}</div>
  if(!data) return null;

  return (
    <div>HookTest2</div>
  )
}

export default HookTest2