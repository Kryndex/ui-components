import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fromAtoms } from '../../utils/theme';

const StyledAlert = styled.div`
  background: ${fromAtoms('Alert', 'type', 'background')};
  border-radius: 4px;
  border: 2px solid ${fromAtoms('Alert', 'type', 'borderColor')};
  color: ${fromAtoms('Alert', 'type', 'color')};
  margin: 8px 0 8px 0;
  min-height: 1em;
  opacity: ${props => (props.visible ? '1' : '0')};
  padding: 1em;
  transition: opacity 0.2s linear;
`;

const CloseIcon = styled.i`
  float: right;
  cursor: pointer;
  margin-left: 1em;
`;

/**
 * An alert to let the user know about an action or state.
 * ```javascript
 * import { Alert } from 'weaveworks-ui-components';
 *
 * export default function() {
 *  return (
 *    <div>
 *     <Alert type="warning" visible={true}>
 *       Warning: Hmm, this is not good, but its not terrible.
 *     </Alert>
 *    </div>
 *   )
 * }
 * ```
 */
function Alert(props) {
  const { onClose, children } = props;
  return (
    <StyledAlert {...props}>
      {children}
      <CloseIcon onClick={onClose} className="fa fa-remove" />
    </StyledAlert>
  );
}

Alert.propTypes = {
  /**
   * Set the color scheme to indicate the nature of the alert.
   */
  type: PropTypes.oneOf(['default', 'success', 'warning', 'error']),

  /**
   * Toggle whether the alert is shown
   */
  visible: PropTypes.bool,
  /**
   * Callback that runs with the alert is dismissed by clicking the 'X'
   */
  onClose: PropTypes.func,
};

Alert.defaultProps = {
  type: 'default',
  visible: true,
};


export default Alert;
