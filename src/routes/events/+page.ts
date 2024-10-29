import Papa from 'papaparse';
import type { PageLoad } from './$types';
export const prerender = true;

// Definerer strukturen for event-data
interface Event {
    event: string;
    fighters: string;
    location: string;
    date: string;
}

// URL til CSV-dataen
const csvUrl = 'https://raw.githubusercontent.com/Greco1899/scrape_ufc_stats/main/ufc_event_details.csv';

// Bruker fetch til å sende HTTP requests
async function fetchAndParseCSV(fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>) {
    const response = await fetch(csvUrl);
    const csvData = await response.text();
    
    // Bruker promise til å håndtere en async funksjon
    return new Promise<Event[]>((resolve, reject) => {
        Papa.parse(csvData, {
            header: true,
            complete: (results) => {
                // Håndterer kun 15 første element
                const processedData = results.data.slice(0, 15).map((record: any) => {
                    // Splitter den første event-fielden til event navn og fighters
                    const [eventName, fighters] = record.EVENT.split(': ');
                    // Returnerer et strukturert Event objekt
                    return {
                        event: eventName,
                        fighters: fighters,
                        location: record.LOCATION,
                        date: record.DATE
                    };
                });

                // Fullfører async med den prosseserte dataen
                resolve(processedData);
            },
            error: (error: Error) => {
                // Hvis vi får feil, reject, blir håndtert senere
                reject(error);
            }
        });
    });
}

// Kaller på funksjonen når siden laster inn
export const load: PageLoad = async ({ fetch }): Promise<{ data: { events: Event[] } }> => {
    try {
        // Definerer events-lista fra nettsiden
        const events = await fetchAndParseCSV(fetch);
        return {
            // Returnerer events i et data-objekt
            data: {
                events
            } 
        };
    } catch (error) {
        // Logger feil som har skjedd
        console.error('Error fetching or processing CSV:', error);
        return { 
            data: { 
                events: [] 
            } 
        };
    }
};