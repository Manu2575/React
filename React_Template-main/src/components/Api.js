import React, {useEffect, useState} from 'react';
import _ from "lodash";

function useFetchApi(formatData) {
    const [chartdata, setChartData] = useState([])
    useEffect(() => {
        const data = [
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
        ];
    
        setChartData(data);
    
    }, []);
    console.log("useFetchApi")
    return formatData(chartdata)
    
}

  export default useFetchApi;