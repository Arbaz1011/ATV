export type InstagramMedia = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

export type InstagramApiResponse = {
  data: InstagramMedia[];
  paging?: { cursors?: { after?: string }; next?: string };
  error?: string;
  fallback?: boolean;
};

export type BookingFormData = {
  name: string;
  phone: string;
  date: string;
  people: string;
  package: string;
  message: string;
};
