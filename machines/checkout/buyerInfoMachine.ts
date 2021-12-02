import { createMachine, send } from 'xstate';
import { choose } from 'xstate/lib/actions';
import { buyerInfoContext, buyerInfoEvent, buyerInfoModal } from './types';
import { checkoutMachine } from './checkoutMachine';

const SUBMIT_FORM_ID = 'SUBMIT_FORM_ID';

export const buyerInfoMachine = createMachine<buyerInfoContext, buyerInfoEvent>(
  {
    id: 'buyerInfoMachine',
    initial: 'pending',
    on: {
      submitBuyerInfoEvent: {
        actions: 'attemptSendEvent',
      },
    },
    states: {
      pending: {
        on: {
          submitBuyerInfoEvent: 'complete',
        },
      },
      complete: {
        invoke: {
          src: checkoutMachine,
          id: SUBMIT_FORM_ID,
        },
        on: {
          editBuyerInfoEvent: 'editing',
        },
      },
      editing: {
        on: {
          submitBuyerInfoEvent: 'complete',
        },
      },
    },
  },
  {
    actions: {
      attemptSendEvent: choose([
        {
          cond: 'isServiceAvailable',
          actions: 'sendEvent',
        },
      ]),
      sendEvent: send(buyerInfoModal.events.submitBuyerInfoEvent(), {
        to: SUBMIT_FORM_ID,
      }),
    },
    guards: {
      isServiceAvailable: (context, event, condMeta) => !!condMeta.state.children[SUBMIT_FORM_ID],
    },
    services: {
      checkoutMachine,
    },
  }
);
