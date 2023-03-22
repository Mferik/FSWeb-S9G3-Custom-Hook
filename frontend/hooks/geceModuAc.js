import useLocalStorage from "./localStorageKullan";

const useGeceModuAc = () => {

    const [geceModuAcik, setGeceModuAcik] = useLocalStorage('geceModu', false);

    const toggleGeceModu = () => {
        setGeceModuAcik(!geceModuAcik)
    };

  return [geceModuAcik,toggleGeceModu]
}

export default useGeceModuAc