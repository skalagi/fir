import { ID } from '@datorama/akita';

export const channelColors = ['white', '#B71C1C', '#2979FF'];
export interface Channel {
  id: ID;
  state: boolean;
  name: string;
}

export function createChannel(params: Partial<Channel>) {
  return {
    state: false,
    ...params,
  } as Channel;
}
