import { ref } from "vue"

export function useMyFunc(){
  const el1 = ref(null)
  const el2 = ref(null)
  const el3 = ref(null)
  const el4 = ref(null)
  const el5 = ref(null)
  const el6 = ref(null)
  const el7 = ref(null)
  const el8 = ref(null)
  const el9 = ref(null)
  const el10 = ref(null)
  const el11 = ref(null)
  const el12 = ref(null)
  const el13 = ref(null)
  const el14 = ref(null)
  const el15 = ref(null)
  const el16 = ref(null)
  const el17 = ref(null)
  const el18 = ref(null)
  const el19 = ref(null)
  const el20 = ref(null)

  function delay(milliseconds){
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }

  function getFirstLetters(str) {
    const firstLetters = str
      .split(' ')
      .map(word => word[0])
      .slice(0,2)
      .join('');
  
    return firstLetters;
  }
  function getCamellCase(str) {
    const camellCase = str
      .split(' ')
      .join('');
      
      return camellCase;
  }
  function getTotalKuota(str) {
    const totalKuota = str
      .split(' ')
      .splice(0,1)
      .join('')
      .split('-')
      .slice(1)
      .join('')
    return totalKuota;
  }

  return { 
    el1, el2, el3, el4, el5, el6, el7, el8, el9, el10, el11, el12, el13, el14, el15, el16, el17, el18, el19, el20,
    delay, getFirstLetters, getCamellCase, getTotalKuota
  }
}