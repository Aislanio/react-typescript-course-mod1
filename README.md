

1 React: Uma biblioteca/ Framework para trabalhar com desenvolvimento Frontend.

2 Virtual DOM: Árvore de elementos que roda em memória.

3 JSX:  JavaScript XML(HTML no JavaScript)

4 Configura webpack vs Utilizar o CRA

Webpack:
- Controle maior.
- Mais leve.

CRA: npx create-react-app my-app

- Mais prático.
- Maior compatibilidade.


Propiedades (props)


Children= props.children: Voce passa pela abertura das tags: <Button> Texto Children</Button>

export default function Button(props){
	return(
		<button>{props.children}</button>
	);
}
////hOLKES   -FUNÇOES   DE  GANCHO
Cliclo de vida do  react  / componente 
1.quando  ele é montando   ex:  quando esse  componente é muntado busque tal coisa em uma api

2. quando ele é atualizado / quando as  props ou os  esstados muda  o componete  ele atualiza

3.Quando  o  componete  morre(desmontado)/


sempre que  a varialvel mudar o  nosso componente vai  atualizar

import {useState} from 'react';

const [slip,setslip]= useState();	                                                                                                                                                                                                                                                                                                                           

function MudaContador(){
		setContador(contador +1);
	}
	
Forma mais correta // ele pega o valor alterado e depois soma
old = padrão
setContador((oldContador) => oldContador +1);
///


useEffec// hook  de clico de vida

useEffect(()  =>{//Sempre vai executar quando o componente for montado
		
},[]);
[]-array   de  dependecias /sera todas  as  variaveis que   não
//o  react  ele   pega  todos  os hooks, mas ele  não  pode estar   dentro  de  um escopo  porque  o react   não  vai   o  encontra, ele deve estar no niver do componente

//hook  são  ganchos 
//
useEffect(()  =>{//Sempre vai executar quando o componente for atualizado
		
},[contador]);
quando o componente for desmontado

useEffect(()  =>{
	return () =>{
		Quando o componente for desmontado, mas ele acionar quando a dependecia mudar 
	}
},[contador])

mas para ver se ele quando o componente for

useEffect(() => {
	return () =>{
		//seu codigo =)
	}
},[]) // o array de dependecia tem que estar vazio

///// paçar nossa função para outras  propriedades e retorna uma função

// para  evitar que repita a ação  novamente
const handleSetContador = useCallback(() =>{
		setContador((oldContador) => oldContador +1);
		set.add(handleSetContador);
	},[]);

//useMemo evitar que o conta seja repitido ou seja o calculo só vai ser efetuado uma vez
const nuber = useMemo(() => 24823948 * 4928424,[]);
/// useEffect assicronno
useEffect(() =>{
  		async function  getUserReposit(){
  			await localStorage.setItem('user-repos',JSON.stringify({}))
  		}

  		getUserReposit();
  	},[]);

//


const [username,setUsername]=useState("Aislanio");
	const [userData,setUserData]=useState({});
	async function getUserGitHubData(){
		const {data} = await api.get(username);
		
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
