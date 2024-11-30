import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MATCH_RESULT_SPREADSHEET_URL } from './constants';

function World() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(MATCH_RESULT_SPREADSHEET_URL);
                const htmlString = response.data;

                // Parse the HTML string
                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlString, 'text/html');

                // Select the table rows
                const rows = doc.querySelectorAll('table.waffle tr');
                const tableBodyArray = [];

                // Loop through each row and push it into the tableBody array
                rows.forEach(row => {
                    const rowData = [];
                    row.querySelectorAll('td').forEach(cell => {
                        rowData.push(cell.textContent);
                    });
                    tableBodyArray.push(rowData);
                });

                setData(tableBodyArray);

                // setData(response.data.values);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Welcome to the World of FFVIII-2</h1>
            <p>Explore the amazing world of Final Fantasy VIII-2.</p>
            <h2>Spreadsheet Data:</h2>
            <ul>
                {data.map((row, index) => (
                    <li key={index}>{row.join(', ')}</li>
                ))}
            </ul>
        </div>
    );
}

export default World;