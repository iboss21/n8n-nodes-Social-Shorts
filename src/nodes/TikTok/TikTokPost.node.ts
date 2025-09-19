import type { IExecuteFunctions, INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';

export class TikTokPostNode implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'TikTok Post (Stub)',
    name: 'tikTokPost',
    icon: 'fa:video',
    group: ['output'],
    version: 1,
    description: 'TikTok Content Posting API (init + upload + publish). Add your app endpoints & OAuth.',
    defaults: { name: 'TikTok Post (Stub)' },
    inputs: ['main'],
    outputs: ['main'],
    properties: [
      { displayName: 'Caption', name: 'caption', type: 'string', default: '' },
      { displayName: 'Video Binary Property', name: 'binaryProperty', type: 'string', default: 'data' },
    ],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    // Implementation intentionally omitted to keep this package publishable without private app creds.
    return [items];
  }
}
