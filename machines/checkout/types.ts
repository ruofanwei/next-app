import { createModel } from 'xstate/lib/model';
import { ContextFrom, EventFrom } from 'xstate';

export type checkoutStateType = {
  context?: string;
  value: 'active';
};

export type paymentInfo = {
  name?: string;
  cardNumber?: string;
  cardValidDate?: string;
  cardBackNumber?: string;
};

// model defines the machine's context
export const checkoutModal = createModel(
  // Initial context
  {
    status: 'pending',
    payload: {} as paymentInfo,
  },
  {
    // Event creators
    events: {
      checkoutEvent: () => ({}),
    },
  }
);

export type checkoutContext = ContextFrom<typeof checkoutModal>;
export type checkoutEvent = EventFrom<typeof checkoutModal>;

export type buyerInfoStateType = {
  context?: string;
  value: 'pending' | 'complete' | 'editing';
};

export type buyerInfo = {
  name?: string;
  phone?: string;
  email?: string;
  note?: string;
};

export const buyerInfoModal = createModel(
  // Initial context
  {
    status: 'pending',
    payload: {} as buyerInfo,
  },
  {
    // Event creators
    events: {
      submitBuyerInfoEvent: () => ({}),
      editBuyerInfoEvent: () => ({}),
      clearBuyerInfoEvent: () => ({}),
    },
  }
);

export type buyerInfoContext = ContextFrom<typeof buyerInfoModal>;
export type buyerInfoEvent = EventFrom<typeof buyerInfoModal>;
