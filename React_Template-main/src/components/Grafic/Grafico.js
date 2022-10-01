import './Grafico.css'
import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import _ from "lodash";
import useFetchApi from '../Api';




function Grafico() {
    
    /*const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ];*/

      const optionsByEmpresa = {
        title: "Gráficos Por Setor",
        is3D: true,
      };

      const optionsByFuncao = {
        title: "Gráficos Por Função",
        is3D: true,
      };

      console.log("render")

      const formatDataByEmpresa = (data) => {
        const values = _.groupBy(data, (value) => value.empresa);
        console.log("values", values);
        const result = _.map(values, (value, key) => [
            key,
            _.sumBy(value, (v) => v.qtde),
        ]);

        console.log("loadData")
        return [["Setor", "Colaboradores"], ...result];
      };

      const formatDataByFuncao = (data) => {
        const values = _.groupBy(data, (value) => value.funcao);
        console.log("values", values);
        const result = _.map(values, (value, key) => [
            key,
            _.sumBy(value, (v) => v.qtde),
        ]);

        console.log("loadData")
        return [["Setor", "Colaboradores"], ...result];
      };

      const dataByEmpresa = useFetchApi(formatDataByEmpresa)
      const dataByFuncao = useFetchApi(formatDataByFuncao)
      console.log("depois do render")
      
    return (
        <div className='Grafic'>
            <Chart
            options={optionsByEmpresa}
            chartType="PieChart"
            data={dataByEmpresa}
            width={"100%"}
            height={"400px"}
            />
            <Chart
            options={optionsByFuncao}
            chartType="PieChart"
            data={dataByFuncao}
            width={"100%"}
            height={"400px"}
            />
        </div>
    );
}

export default Grafico;