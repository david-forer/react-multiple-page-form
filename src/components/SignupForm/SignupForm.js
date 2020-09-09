import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import ProfileForm from './1ProfileForm'
import SocialForm from './2SocialForm';
import Review from './3Review';
import StepLinks from './StepLinks'
import { SignupFormProvider } from './SignupFormContext';
import { AnimatePresence } from 'framer-motion';

export default function SignupForm() {
  const location = useLocation();


  return (
    <SignupFormProvider>
      <div className="signup-form">
        <StepLinks />
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={ProfileForm} />
            <Route path="/social" exact component={SocialForm} />
            <Route path="/review" exact component={Review} />
          </Switch>
        </AnimatePresence>
      </div>
    </SignupFormProvider>
  );
}
