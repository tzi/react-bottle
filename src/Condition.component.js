import React from 'react';

function isType(child, type) {
  return child.type.name === type.name;
}

export class Condition extends React.PureComponent {
  searchChild(type) {
    const match = React.Children.toArray(this.props.children).find(function(
      child
    ) {
      return isType(child, type);
    });

    if (match) {
      return match;
    }

    return false;
  }

  searchChildren(type) {
    return React.Children.toArray(this.props.children).filter(function(child) {
      return isType(child, type);
    });
  }

  render() {
    if (this.props.if) {
      return this.searchChild(Then);
    }
    const match = this.searchChildren(Else).find(function(child) {
      return typeof child.props.if === 'undefined' || Boolean(child.props.if);
    });
    if (match) {
      return match;
    }

    return false;
  }
}

function renderThen(props) {
  if (props.render) {
    return props.render();
  }

  return props.children || false;
}

export const Then = props => renderThen(props);
export const Else = props => renderThen(props);
