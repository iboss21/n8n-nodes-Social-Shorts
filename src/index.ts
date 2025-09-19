import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { InstagramReelsNode } from './nodes/Instagram/InstagramReels.node';
import { YouTubeShortsNode } from './nodes/YouTube/YouTubeShorts.node';
import { TikTokPostNode } from './nodes/TikTok/TikTokPost.node';

export const nodes = [InstagramReelsNode, YouTubeShortsNode, TikTokPostNode];
export const credentials = [];
