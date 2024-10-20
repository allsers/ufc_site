import Papa from 'papaparse';
import type { PageLoad } from './$types';

interface Event {
    event: string;
    fighters: string;
    location: string;
    date: string;
}

const csvUrl = 'https://raw.githubusercontent.com/Greco1899/scrape_ufc_stats/main/ufc_event_details.csv';

async function fetchAndParseCSV(fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>) {
    const response = await fetch(csvUrl);
    const csvData = await response.text();
    
    return new Promise<Event[]>((resolve, reject) => {
        Papa.parse(csvData, {
            header: true,
            complete: (results) => {
                const processedData = results.data.slice(0, 15).map((record: any) => {
                    const [eventName, fighters] = record.EVENT.split(': ');
                    return {
                        event: eventName,
                        fighters: fighters,
                        location: record.LOCATION,
                        date: record.DATE
                    };
                });
                resolve(processedData);
            },
            error: (error: Error) => {
                reject(error);
            }
        });
    });
}

export const load: PageLoad = async ({ fetch }): Promise<{ data: { events: Event[] } }> => {
    try {
        const events = await fetchAndParseCSV(fetch);
        return { 
            data: {
                events
            } 
        };
    } catch (error) {
        console.error('Error fetching or processing CSV:', error);
        return { 
            data: { 
                events: [] 
            } 
        };
    }
};