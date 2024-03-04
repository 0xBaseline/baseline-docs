export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

type EventParams = {
  event_category: string;
  event_label?: string;
  value?: number;
}

export const event = ({ action, params }: { action: string; params: EventParams }) => {
  window.gtag("event", action, params);
};

