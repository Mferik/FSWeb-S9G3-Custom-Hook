
import { useState, useEffect } from 'react'

const useLocalStorage = (key, baslangicDegeri) => {
    const [deger, setDeger] = useState(() =>{
        const kayitliDeger = window.localStorage.getItem(key);
        return kayitliDeger !== null ? JSON.parse(kayitliDeger) : baslangicDegeri
    });

    useEffect(() => {
        window.localStorage.setItem(key,JSON.stringify(deger));
    }, [key,deger])

  return [deger,setDeger]
}

export default useLocalStorage