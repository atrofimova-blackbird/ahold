import React, { useEffect, useRef } from 'react'
import './App.css';

function FlippContainer() {
  const flippContainer = useRef(null)


  useEffect(() => {
    if (window.storefront !== undefined) {
      // console.log('window.storefront', window.storefront);
    } else {
      // console.log('defining storefront');
      window.storefront = new Flipp.Storefront({
        accessToken: "810f9efe5a864eb08542e5488c78624e",
        merchantId: "2393",
        merchantNameIdentifier: "stopandshop",
      });
    }

    window.storefront.resetState();
    window.storefront.setDelegate('itemDetailsDelegate',
        {
          itemDetailsTriggered: (item) => {
            console.log("ITEM: ", item);
            return true;
          },
        });
    window.storefront.renderStorefront(flippContainer.current);

  }, [])

  return (
      <div id="flipp-container" ref={flippContainer}>
        Flipp container
      </div>
  );
}

export default FlippContainer;
