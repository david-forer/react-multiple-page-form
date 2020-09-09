import React from 'react';
import { useSignupForm } from './SignupFormContext';
import Animator from './Animator';

export default function Review() {
  const { profile, social } = useSignupForm();

  function handleSubmit(e) {
    e.preventDefault();
alert('You are submitting the info!')

  }
  return (
    <Animator>
      <form onSubmit={handleSubmit}>
        <h2>Review All Your Info</h2>
        <p>
          <strong>Name</strong>: {profile.name}
        </p>
        <p>
          <strong>Email</strong>: {profile.email}
        </p>
        <p>
          <strong>Twitter</strong>: {social.twitter}
        </p>
        <p>
          <strong>Facebook</strong>: {social.facebook}
        </p>

        <input type="submit" value="Submit All Info" />
      </form>
    </Animator>
  );
}
