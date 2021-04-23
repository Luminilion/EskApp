import React, {useState} from 'react';

// Create state to save the list of enigmas
export function useEnigmaState() {
  const [enigmas, setEnigmas] = useState<Array<EnigmaType>>([]);

  const setList = (newList: Array<EnigmaType>) => {
    setEnigmas(newList);
  }

  return {enigmas, setList}
}

export interface EnigmaType {
  cacher: string[];
  indications: string[];
  indices: string[];
}
