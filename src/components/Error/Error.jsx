import React from 'react'

export default function Error({ type }) {
    switch (type) {
        case 1:
            return (
                <div>
                    <h1>Sorry, You are on the wrong page, <a href="http://messengerx.io/co-vac">Click Here</a> to check the vaccine slots
                        in your area</h1>
                </div>
            )
        case 2:
            return (
                <div>
                    <h1>Your country is not supported yet, <a href="http://messengerx.io/co-vac"> Click Here</a> to check the vaccine slots
                        in your area.</h1>
                </div>
            )
        default:
            return <div>
                <h1>Sorry, we encontered some error, <a href="http://messengerx.io/co-vac"> Click Here</a> to check the vaccine slots
                in your area.</h1>
            </div>;
    }
}
