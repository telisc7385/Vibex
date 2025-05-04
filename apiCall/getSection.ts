import { apiCore } from "./apiCore";

export const getsectionApi = async () => {
    const response = await apiCore('/api/section-config/', {}, 'GET');
    return response;
  };


  // getSection.ts
export const getsectionWitSpreadSheetApi = async () => {
    const response = await fetch('https://sheetdb.io/api/v1/61mt3x2q974l4');
    const rows = await response.json();
  
    const config: Record<string, boolean> = {};
    rows.forEach((row: any) => {
      config[row.section] = row.visible === 'TRUE';
    });
  
    return { params: config };
  };
  