require('dotenv').config();

const USERNAME=process.env.IMGURUSERNAME;

export const BASE_URL=require('supertest')('https://api.imgur.com');
export const ACCOUNT_BASE_PATH='/3/account';
export const ACCOUNT_IMAGES_PATH=`/3/account/me/images`;
export const COMMENT_BASE_PATH='/3/comment';
export const GALLERY_BASE_PATH='/3/gallery';
export const IMAGE_BASE_PATH='/3/image';
export const ALBUM_BASE_PATH='/3/album';
export const TOKEN_PATH='/oauth2/token';
export const ACCOUNT_BLOCK_STATUS_PATH=`/account/v1/${USERNAME}/block`;
export const ACCOUNT_AVAILABLE_AVATARS_PATH= `/3/account/${USERNAME}/available_avatars`;
export const ACCOUNT_AVATAR_PATH=`/3/account/${USERNAME}/avatar`;
export const ACCOUNT_SETTINGS_PATH='/3/account/me/settings';
export const UPDATE_ACCOUNT_SETTINGS_PATH=`/3/account/${USERNAME}/settings`;
export const VERIFY_EMAIL_PATH=`/3/account/${USERNAME}/verifyemail`;
export const ACCOUNT_BLOCKS_PATH='/3/account/me/block';
export const CLIENT_ID=process.env.CLIENT_ID;
export const CLIENT_SECRET=process.env.CLIENT_SECRET;
export const REFRESH_TOKEN=process.env.REFRESH_TOKEN;



