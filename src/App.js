import React from 'react';
import './App.css';
import { CsvToHtmlTable } from "react-csv-to-table";

import { dataFile } from "./File";

export const App = () => {
    return (
        <div className="container">


    Tableau crée à partir d'un fichier csv
    <br/><br/>
    <CsvToHtmlTable
        data={dataFile}
    csvDelimiter=";"
    tableClassName="table table-striped table-hover"
        />


        <h2>Fichier initial</h2>
    <pre>
    {dataFile}
    </pre>
    </div>
    );
};

export default App;
