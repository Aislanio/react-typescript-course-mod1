import Button from'./components/Button';
import {useState,useEffect} from 'react';
import List from'./components/List';  
import api from  './services/api';

function App() {
	
	const [username,setUsername]=useState("Aislanio");
	const [userData,setUserData]=useState({});

	useEffect(()=>{
		const localStorageGetUserData = localStorage.getItem('@reactapp/GITHUB_USER_DATA');
		
		setUserData(JSON.parse(localStorageGetUserData) || {});
	},[]);

	async function getUserGitHubData(){
		const {data} = await api.get(username);
		
		localStorage.setItem('@reactapp/GITHUB_USER_DATA',JSON.stringify(data))
		setUserData(data);
	}

  return (
    <div >
      <h1>HELO WORD</h1>
      <input type="text" value={username} onChange={(event) =>setUsername(event.target.value)} />
      <button onClick={getUserGitHubData}>Pesquisar usuário </button>
    	<div>{userData.name}<br/>
    	{userData.company}</div>
    </div>
  );
}

export default App;
