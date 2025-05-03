export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;

export const googlePageView = (url: string) => {
  (window as any)?.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

export const googleEvent = (eventName: any, eventObj: any) => {
  (window as any)?.gtag("event", eventName, { ...eventObj });
};
