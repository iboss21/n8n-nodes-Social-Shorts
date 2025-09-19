import type { IExecuteFunctions, INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';
import axios from 'axios';

export class InstagramReelsNode implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Instagram Reels Publisher',
    name: 'instagramReelsPublisher',
    icon: 'file:instagram.svg',
    group: ['output'],
    version: 1,
    description: 'Publish a video to Instagram Reels via the Graph API (container + publish)',
    defaults: { name: 'Instagram Reels Publisher' },
    inputs: ['main'],
    outputs: ['main'],
    properties: [
      {
        displayName: 'IG Business User ID',
        name: 'igUserId',
        type: 'string',
        default: '',
        placeholder: '1784xxxxxxxxxxxxx',
        description: 'Instagram Business Account ID (not the username)',
        required: true,
      },
      {
        displayName: 'Video URL',
        name: 'videoUrl',
        type: 'string',
        default: '',
        placeholder: 'https://.../yourvideo.mp4',
        description: 'Publicly reachable URL to the MP4 (S3 presigned URL works)',
        required: true,
      },
      {
        displayName: 'Caption',
        name: 'caption',
        type: 'string',
        typeOptions: { rows: 5 },
        default: '',
        placeholder: 'My caption #tags',
        required: false,
      },
      {
        displayName: 'Share to Feed',
        name: 'shareToFeed',
        type: 'boolean',
        default: true,
        description: 'Whether to share to the feed in addition to Reels',
      },
      {
        displayName: 'Access Token',
        name: 'accessToken',
        type: 'string',
        typeOptions: { password: true },
        default: '',
        description: 'User access token with `instagram_content_publish` permission',
        required: true,
      },
      {
        displayName: 'Graph API Version',
        name: 'graphVersion',
        type: 'string',
        default: 'v19.0',
        description: 'Facebook Graph API version',
      },
    ],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const returnData: INodeExecutionData[] = [];

    for (let i = 0; i < items.length; i++) {
      const igUserId = this.getNodeParameter('igUserId', i) as string;
      const videoUrl = this.getNodeParameter('videoUrl', i) as string;
      const caption = this.getNodeParameter('caption', i, '') as string;
      const shareToFeed = this.getNodeParameter('shareToFeed', i) as boolean;
      const accessToken = this.getNodeParameter('accessToken', i) as string;
      const graphVersion = this.getNodeParameter('graphVersion', i) as string;

      const base = `https://graph.facebook.com/${graphVersion}`;

      // 1) Create media container
      const containerRes = await axios.post(`${base}/${igUserId}/media`, null, {
        params: {
          media_type: 'REELS',
          video_url: videoUrl,
          caption,
          share_to_feed: shareToFeed ? 'true' : 'false',
          access_token: accessToken,
        },
        validateStatus: () => true,
      });

      if (containerRes.status >= 400) {
        throw new Error(`IG container error ${containerRes.status}: ${JSON.stringify(containerRes.data)}`);
      }

      const creationId = containerRes.data.id;

      // 2) Publish
      const publishRes = await axios.post(`${base}/${igUserId}/media_publish`, null, {
        params: {
          creation_id: creationId,
          access_token: accessToken,
        },
        validateStatus: () => true,
      });

      if (publishRes.status >= 400) {
        throw new Error(`IG publish error ${publishRes.status}: ${JSON.stringify(publishRes.data)}`);
      }

      returnData.push({ json: { creationId, publish: publishRes.data } });
    }

    return [returnData];
  }
}
