import { ID } from '@datorama/akita';

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
