import React from 'react';
import { Link } from 'react-router-dom';
import './AboutHelp.css';
import logo from '../assets/logo.svg';

const Help = () => {
    return (
        <div className="image-center">
            <header>
                <Link to="/">
                    <img src={logo} width="320" alt="Docket Digest" />
                </Link>
            </header>
            <div className="text-container wide">
                <h2>FAQ</h2>
                <h3>Do I have to be an attorney to use Docket Digest?</h3>
                <p className="text">
                    No! Docket Digest is designed to provide access of public
                    information to the entire public.
                </p>
                <h3>Where do I get a docket number? How do I look up my court?</h3>
                <p className="text">
                    Docket numbers are printed at the top of legal filings.
                    Court and case information can be searched for free on the PACER website.
                </p>
                <h3>How do I register for Docket Digest?</h3>
                <p className="text">
                    Enter Court and Docket number on the home page of Docket Digest.
                    The Subscribe button will prompt you to enter an e-mail and create a password.
                </p>
                <h3>Are there any limits to Docket Digest usage?</h3>
                <p className="text">
                    Users can subscribe to as many dockets as they wish.  After 3 subscriptions, there is a fee to add additional cases.
                </p>
                <h3>Where do I go to view my transactions?</h3>
                <p className="text">
                After creating an account password, users can login to see which dockets they have subscribed to, and edit their subscriptions.
                </p>
                <h3>What if I can't find the federal court for my case?</h3>
                <p className="text">
                    Some federal courts do not provide open access to their court cases via RSS feed. Please contact your representatives to encourage better access to this public information.
                </p>
                <h3>What if I'm looking for a local court case?</h3>
                <p className="text">
                    State and regional court documents are not currently available at Docket Digest.
                </p>
                {/* <h3>What if my docket number is incorrect?</h3>
                <p className="text">
                </p> */}
                <h3>Do I have to pay for this service?</h3>
                <p className="text">
                    After 3 subscriptions, users will be asked to pay for further subscriptions per year.
                </p>
                <h3>Why does Docket Digest charge a fee?</h3>
                <p className="text">
                    Docket Digest charges a fee because PACER, the government source of federal court documents charges to access these files.  By aggregating access to PACER of updated filings, we can pass limited free access to our users.
                </p>
                <h3>How often am I billed?</h3>
                <p className="text">
                    Users will be billed at the time of access for each additional case.  Subscription expires after one year.
                </p>
            </div>
        </div>
    )
}

export default Help;
