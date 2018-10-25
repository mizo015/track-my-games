import React from 'react';

import { SuccessText, FailureText } from '../components/StyledText';

const SuccessFailureMessage = ({ status }) => {
  if (status == null) {
    return null;
  }

  if (status) {
    return <SuccessText>Success!</SuccessText>;
  }

  return <FailureText>Failed!!</FailureText>;
};

export default SuccessFailureMessage;
