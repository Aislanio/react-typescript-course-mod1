import React from 'react';
import {useState,useEffect,useCallback,useMemo} from 'react';
const set = new Set;
export default   function List(){
	const [contador,setContador] = useState(1);
	
	const nuber = useMemo(() => 24823948 * 4928424,[]);
	const handleSetContador = useCallback(() =>{
		setContador((oldContador) => oldContador +1);
		set.add(handleSetContador);
	},[]);
		
	
	console.log(set.size);
	return<div>Contador:{contador}
	<button  onClick={handleSetContador}>Aumenta contador</button></div>; 
};