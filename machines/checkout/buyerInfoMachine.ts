import { createMachine, send } from 'xstate';
import { choose } from 'xstate/lib/actions';
import { buyerInfoContext, buyerInfoEvent, buyerInfoModal } from './types';
import { checkoutMachine } from './checkoutMachine';

const SUBMIT_FORM_ID = 'SUBMIT_FORM_ID';

export const buyerInfoMachine = createMachine<buyerInfoContext, buyerInfoEvent>(
  {
    id: 'buyerInfoMachine',
    initial: 'machineNotInvoked',
    on: {
      sendEventButtonClicked: {
        actions: 'attemptSendEvent',
      },
    },
    states: {
      machineNotInvoked: {
        on: {
          toggleStateButtonClicked: 'machineInvoked',
        },
      },
      machineInvoked: {
        invoke: {
          src: checkoutMachine,
          id: SUBMIT_FORM_ID,
        },
        on: {
          toggleStateButtonClicked: 'machineNotInvoked',
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
      sendEvent: send(buyerInfoModal.events.checkoutEvent(), {
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
