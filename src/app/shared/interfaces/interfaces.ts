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
  account_id: number;
  account_url: string;
  ad_type: number;
  ad_url: string;
  animated: boolean;
  bandwidth: number;
  datetime: number;
  deletehash: string;
  description: string | null;
  edited: string;
  favorite: boolean;
  has_sound: boolean;
  height: number;
  id: string;
  in_gallery: boolean;
  in_most_viral: boolean;
  is_ad: boolean;
  name: string | null;
  nsfw: string | null;
  section: string | null;
  size: number;
  tags: string[];
  title: string | null;
  type: string;
  views: number;
  vote: number;
  width: number;
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
