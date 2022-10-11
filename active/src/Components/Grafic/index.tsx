import * as C from '../Grafic/index.styles';
import { Chart } from "react-google-charts";
import _ from "lodash";
import useFetchApi from '../api';

export function GraficoA() {
   
      const optionsByEnfermeiro = {
        title: "Etinia / Atendimento",
        is3D: true,
      };
      {/*@ts-expect-error ignorar data*/}
      const formatDataByEnfermeiro = (data) => {
        const values = _.groupBy(data, (value) => value.Etinia);
        
        const result = _.map(values, (value, key) => [
            key,
            _.sumBy(value, (v) => v.Qtde),
        ]);

        return [["Enfermeiro", "M",], ...result];
      };

      const dataByEnfermeiro = useFetchApi(formatDataByEnfermeiro)
      
    return (
        <C.ContainerA>
          <Chart
            options={optionsByEnfermeiro}
            chartType="PieChart"
            data={dataByEnfermeiro}
            width={"100%"}
            height={"200px"}
          />
        </C.ContainerA>
    );
}

export function GraficoB() {

    const optionsByFuncao = {
      title: "Nivel / Atendimento",
      is3D: true,
    };

    {/*@ts-expect-error ignorar data*/}
    const formatDataByFuncao = (data) => {
      const values = _.groupBy(data, (value) => value.Nivel);
      
      const result = _.map(values, (value, key) => [
          key,
          _.sumBy(value, (v) => v.Qtde),
      ]);

      return [["Enfermeiro", "Doenca"], ...result];
    };

    const dataByFuncao = useFetchApi(formatDataByFuncao)
    
  return (
      <C.ContainerB>
        <Chart
          options={optionsByFuncao}
          chartType="PieChart"
          data={dataByFuncao}
          width={"100%"}
          height={"200px"}
        />
      </C.ContainerB>
  );
}

export function GraficoC() {

  const optionsByFuncao = {
    title: "Faixa-etaria / Atendimento",
    is3D: true,
  };

  {/*@ts-expect-error ignorar data*/}
  const formatDataByFuncao = (data) => {
    const values = _.groupBy(data, (value) => value.FaixaEtaria);
    
    const result = _.map(values, (value, key) => [
        key,
        _.sumBy(value, (v) => v.Qtde),
    ]);

    return [["Setor", "Colaboradores"], ...result];
  };

  const dataByFuncao = useFetchApi(formatDataByFuncao)
  
return (
    <C.ContainerC>
      <Chart
        options={optionsByFuncao}
        chartType="ColumnChart"
        data={dataByFuncao}
        width={"100%"}
        height={"200px"}
      />
    </C.ContainerC>
);
}

export function GraficoD() {

  const optionsByFuncao = {
    title: "Sexo / Atendimento",
    is3D: true,
  };

  {/*@ts-expect-error ignorar data*/}
  const formatDataByFuncao = (data) => {
    const values = _.groupBy(data, (value) => value.Sexo);
    
    const result = _.map(values, (value, key) => [
        key,
        _.sumBy(value, (v) => v.Qtde),
    ]);

    return [["Setor", "Colaboradores"], ...result];
  };

  const dataByFuncao = useFetchApi(formatDataByFuncao)
  
return (
    <C.ContainerD>
      <Chart
        options={optionsByFuncao}
        chartType="PieChart"
        data={dataByFuncao}
        width={"100%"}
        height={"200px"}
      />
    </C.ContainerD>
);
}

export function GraficoE() {

  const optionsByFuncao = {
    title: "Doença / Atendimento",
    is3D: true,
  };

  {/*@ts-expect-error ignorar data*/}
  const formatDataByFuncao = (data) => {
    const values = _.groupBy(data, (value) => value.Doenca);
    
    const result = _.map(values, (value, key) => [
        key,
        _.sumBy(value, (v) => v.Qtde),
    ]);

    return [["Setor", "Colaboradores"], ...result];
  };

  const dataByFuncao = useFetchApi(formatDataByFuncao)
  
return (
    <C.ContainerE>
      <Chart
        options={optionsByFuncao}
        chartType="ColumnChart"
        data={dataByFuncao}
        width={"100%"}
        height={"200px"}
      />
    </C.ContainerE>
);
}

export function GraficoF() {

  const optionsByFuncao = {
    title: "Técnico / Atendimento",
  };

  {/*@ts-expect-error ignorar data*/}
  const formatDataByFuncao = (data) => {
    const values = _.groupBy(data, (value) => value.Tecnico);
    console.log(values)
    const result = _.map(values, (value, key) => [
        key,
        _.sumBy(value, (v) => v.Qtde),
    ]);

    return [["Qtde","Tecnico"], ...result];
  };

  const dataByFuncao = useFetchApi(formatDataByFuncao)
  
return (
    <C.ContainerF>
      <Chart
        options={optionsByFuncao}
        chartType="ColumnChart"
        data={dataByFuncao}
        width={"100%"}
        height={"200px"}
      />
    </C.ContainerF>
);
}