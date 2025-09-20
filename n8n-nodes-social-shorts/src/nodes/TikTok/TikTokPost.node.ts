
import type { IExecuteFunctions, INodeType, INodeTypeDescription } from 'n8n-workflow';
export class TikTokPostNode implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'TikTok Post (Stub)',
    name: 'tikTokPost',
    icon: 'fa:video',
    group: ['output'],
    version: 1,
    description: 'TikTok Content Posting API (init → upload → publish).',
    defaults: { name: 'TikTok Post (Stub)' },
    inputs: ['main'],
    outputs: ['main'],
    properties: [
      { displayName: 'Caption', name: 'caption', type: 'string', default: '' },
      { displayName: 'Video Binary Property', name: 'binaryProperty', type: 'string', default: 'data' }
    ],
  };
  async execute(this: IExecuteFunctions) { return [this.getInputData()]; }
}
