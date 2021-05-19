import React from 'react';
import './Footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <p>Powered By <a href="https://www.messengerx.io/"> MessengerX.io</a></p>
            <a href='https://play.google.com/store/apps/details?id=messenger.x.chat.bot.messenger.release&utm_source=mxio-co-vac-page&utm_campaign=co-vac&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                <img className="footer__giops" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
            </a>
        </div>
    )
}
