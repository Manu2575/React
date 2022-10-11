import React, {useEffect, useState} from 'react';
import { data } from '../Types/arquivo';
import _ from "lodash";
{/*@ts-expect-error ignorar formatData*/}
function useFetchApi(formatData) {
    const [chartdata, setChartData] = useState<data[]>([])
    
    useEffect(() => {
        const data = [
            /*
            {empresa: "Logística,", funcao: "Estoquista", qtde: 9 },
            {empresa: "Logística,", funcao: "Conferente", qtde: 3 },
            {empresa: "Logística,", funcao: "Administrativo", qtde: 1 },
            {empresa: "Logística,", funcao: "Encarregado", qtde: 1 },
            {empresa: "Vendas,", funcao: "Vendedor", qtde: 3 },
            {empresa: "Vendas,", funcao: "Supervisor", qtde: 1 },
            {empresa: "Compras,", funcao: "Administrativo", qtde: 2 },
            {empresa: "Compras,", funcao: "Gerente", qtde: 1 },
            {empresa: "Financeiro,", funcao: "Administrativo", qtde: 1 },
            {empresa: "Financeiro,", funcao: "Gerente", qtde: 1 },
            */

            {Data:"09/10/22", Tecnico:"NadiaA.", Qtde:1, Doenca:"Covid19", Sexo:"M", FaixaEtaria:"16a20", Etinia:"Branco", Nivel:"Alfabetizado"},
            {Data:"09/10/22", Tecnico:"JoaoT.", Qtde:1, Doenca:"PeFraturado", Sexo:"F", FaixaEtaria:"26a30", Etinia:"Negro", Nivel:"Alfabetizado"},
            {Data:"09/10/22", Tecnico:"MarciaC.", Qtde:1, Doenca:"Infarto", Sexo:"M", FaixaEtaria:"26a30", Etinia:"Pardo", Nivel:"Alfabetizado"},
            {Data:"09/10/22", Tecnico:"NadiaA.", Qtde:1, Doenca:"Alcoolismo", Sexo:"M", FaixaEtaria:"46a50", Etinia:"Branco", Nivel:"NaoAlfabetizado"},
            {Data:"09/10/22", Tecnico:"BeatrizD.", Qtde:1, Doenca:"Covid19", Sexo:"M", FaixaEtaria:"11a15", Etinia:"Branco", Nivel:"Alfabetizado"},
            {Data:"09/10/22", Tecnico:"NadiaA.", Qtde:1, Doenca:"BaciaFraturada", Sexo:"F", FaixaEtaria:"56a60", Etinia:"Branco", Nivel:"NaoAlfabetizado"},
            {Data:"09/10/22", Tecnico:"JoaoT.", Qtde:1, Doenca:"Afogamento", Sexo:"M", FaixaEtaria:"26a30", Etinia:"Negro", Nivel:"Alfabetizado"},
            {Data:"09/10/22", Tecnico:"MarciaC.", Qtde:1, Doenca:"AtaqueCardiaco", Sexo:"M", FaixaEtaria:"41a45", Etinia:"Branco", Nivel:"Alfabetizado"},
            {Data:"09/10/22", Tecnico:"NadiaA.", Qtde:1, Doenca:"Covid19", Sexo:"F", FaixaEtaria:"16a20", Etinia:"Pardo", Nivel:"Alfabetizado"},
            {Data:"09/10/22", Tecnico:"BeatrizD.", Qtde:1, Doenca:"Diarreia", Sexo:"M", FaixaEtaria:"36a40", Etinia:"Branco", Nivel:"NaoAlfabetizado"},
            {Data:"09/10/22", Tecnico:"NadiaA.", Qtde:1, Doenca:"MaoFraturada", Sexo:"M", FaixaEtaria:"16a20", Etinia:"Branco", Nivel:"Alfabetizado"},
            {Data:"09/10/22", Tecnico:"JoaoT.", Qtde:1, Doenca:"Covid19", Sexo:"F", FaixaEtaria:"21a25", Etinia:"Branco", Nivel:"Alfabetizado"},
            {Data:"09/10/22", Tecnico:"MarciaC.", Qtde:1, Doenca:"Drogado", Sexo:"F", FaixaEtaria:"26a30", Etinia:"Branco", Nivel:"Alfabetizado"},
            {Data:"09/10/22", Tecnico:"NadiaA.", Qtde:1, Doenca:"Alcoolismo", Sexo:"M", FaixaEtaria:"51a55", Etinia:"Negro", Nivel:"NaoAlfabetizado"},
            {Data:"09/10/22", Tecnico:"BeatrizD.", Qtde:1, Doenca:"Covid19", Sexo:"M", FaixaEtaria:"26a30", Etinia:"Pardo", Nivel:"Alfabetizado"},
            {Data:"09/10/22", Tecnico:"JorgeE.", Qtde:1, Doenca:"Infarto", Sexo:"M", FaixaEtaria:"41a45", Etinia:"Branco", Nivel:"Alfabetizado"},
            {Data:"09/10/22", Tecnico:"PedroF.", Qtde:1, Doenca:"Afogamento", Sexo:"F", FaixaEtaria:"26a30", Etinia:"Branco", Nivel:"Alfabetizado"},
            {Data:"09/10/22", Tecnico:"NadiaA.", Qtde:1, Doenca:"Corte", Sexo:"F", FaixaEtaria:"31a35", Etinia:"Branco", Nivel:"Alfabetizado"},
        
        ];

        setChartData(data);
    
    }, []);

    return formatData(chartdata)
    
}

  export default useFetchApi;