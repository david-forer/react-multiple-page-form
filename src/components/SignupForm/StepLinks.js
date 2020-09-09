import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSignupForm } from './SignupFormContext';

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export default function StepLinks() {

  const { profile, social } = useSignupForm();

  const isProfileDone = !isEmpty(profile)
  const isSocialDone = !isEmpty(social)

    return (
      <div className="step-links">
        <NavLink to="/" exact>
          {' '}
          Profile <span />
        </NavLink>
        <NavLink to="/social">
          {' '}
         Social <span />
        </NavLink>
        <NavLink to="/review">Review <span /> </NavLink>
      </div>
    );
}