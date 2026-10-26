import posthog from './posthog.js';

const posthogAppLogger = {
  info(message, attributes) {
    posthog.logger.info(message, attributes);
  },
};

export default posthogAppLogger;
