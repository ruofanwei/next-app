import { createMachine, actions } from 'xstate';
import { checkoutContext, checkoutEvent } from './types';

const { log } = actions;

export const checkoutMachine = createMachine<checkoutContext, checkoutEvent>({
  id: 'checkoutMachine',
  initial: 'pending',
  states: {
    active: {
      on: {
        checkoutEvent: {
          actions: log(),
        },
      },
    },
  },
});
