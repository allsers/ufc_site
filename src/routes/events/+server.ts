import { json } from '@sveltejs/kit'; // Importerer JSON
import type { RequestHandler } from '@sveltejs/kit'; // Brukes for HTTP requests
import { parse } from 'csv-parse/sync'; // Parser CSV data. Installert med 'npm install csv-parse'
import fetch from 'node-fetch'; // Åpner for HTTP requests i node.js områder

interface CSVRecord { // Definererer datatype til info-en
    EVENT: string;
    LOCATION: string;
    DATE: string;
};

const csvUrl = 'https://raw.githubusercontent.com/Greco1899/scrape_ufc_stats/main/ufc_event_details.csv'

export const GET: RequestHandler = async () => {
    try { // Håndterer errors
        const response = await fetch(csvUrl); // Fetcher data fra url-en
        const csvData = await response.text(); // Tar ut tekst-dataen fra CSV-filen
        
        const records = parse(csvData, { // Skipper over tomme linjer, håndterer første kolonne som headere
            columns: true,
            skip_empty_lines: true
        }) as CSVRecord[]; // Parser CSV-en med korrekt datatyper

        const processedData = records.slice(0, 15).map((record: CSVRecord) => {
            const [eventName, fighters] = record.EVENT.split(': ');
            return {
                event: eventName,
                fighters: fighters,
                location: record.LOCATION,
                date: record.DATE
            }
        });

        // Konverterer til JSON med json-modulet
        return json(processedData);

    } catch (error) { // Logger alle feil og returnerer en error-response
        console.error('Error fetching or processing CSV:', error);
        return json({ error: 'Failed to fetch or process data' }, { status: 500 });
    }
};