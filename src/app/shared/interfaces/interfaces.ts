export interface UserData {
  id: number;
  url: string;
  bio: string | null;
  avatar: string;
  avatar_name: string;
  cover: string;
  cover_name: string;
  reputation: number;
  reputation_name: string;
  created: number;
  pro_expiration: boolean;
  user_follow: {
    status: boolean;
  };
  is_blocked: boolean;
}

export interface Image {
  link: string;
}

export interface Album {
  id: string;
  title: string;
  description: string | null;
  datetime: number;
  cover: string;
  cover_edited: number;
  cover_width: number;
  cover_height: number;
  account_url: string;
  account_id: number;
  privacy: string;
  layout: string;
  views: number;
  link: string;
  favorite: boolean;
  nsfw: null;
  section: null;
  images_count: number;
  in_gallery: boolean;
  is_ad: boolean;
  include_album_ads: boolean;
  is_album: boolean;
  deletehash: string;
  order: number;
}
