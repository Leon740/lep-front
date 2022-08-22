// React
import React from 'react';
import PropTypes from 'prop-types';

// Gatsby
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

// Components
import Icon from './Icon';

function ButtonChildren(props) {
  const {
    // eslint-disable-next-line react/prop-types
    icon, iconOrder, label, labelOrder,
  } = props;

  return (
    <span className="button__inner">
      {icon && (
      <span className={`button__icon ${iconOrder}`}>
        <Icon className={`${icon} icon__inner`} />
      </span>
      )}
      <span className={`button__label ${labelOrder}`}>{label}</span>
    </span>
  );
}

function Button(props) {
  const {
    className, to, active, onClick, icon, iconOrder, label, labelOrder,
  } = props;

  function buttonOnClick() {
    if (onClick) {
      onClick();
    }
  }

  const modifiedClassName = `button button__${className} button__${className}--${active ? 'active' : 'default'}`;

  if (to === '') {
    return (
      <button
        className={modifiedClassName}
        onClick={() => buttonOnClick()}
        type="button"
      >
        <ButtonChildren icon={icon} iconOrder={iconOrder} label={label} labelOrder={labelOrder} />
      </button>
    );
  }

  if (to.includes('http') || to.includes('mailto') || to.includes('tel')) {
    return (
      <a
        className={modifiedClassName}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonChildren icon={icon} iconOrder={iconOrder} label={label} labelOrder={labelOrder} />
      </a>
    );
  }

  if (to.includes('/#')) {
    return (
      <AnchorLink
        className={modifiedClassName}
        onAnchorLinkClick={() => buttonOnClick()}
        to={to}
      >
        <ButtonChildren icon={icon} iconOrder={iconOrder} label={label} labelOrder={labelOrder} />
      </AnchorLink>
    );
  }

  return (
    <Link
      className={modifiedClassName}
      to={to}
    >
      <ButtonChildren icon={icon} iconOrder={iconOrder} label={label} labelOrder={labelOrder} />
    </Link>
  );
}

Button.propTypes = {
  className: PropTypes.oneOf(['primary', 'secondary', 'circle']).isRequired,
  to: PropTypes.string,
  active: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  onClick: PropTypes.func,
  icon: PropTypes.string,
  iconOrder: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelOrder: PropTypes.string,
};

Button.defaultProps = {
  to: '',
  active: false,
  icon: '',
  iconOrder: 'order-0',
  labelOrder: 'order-1',
};

export default Button;
