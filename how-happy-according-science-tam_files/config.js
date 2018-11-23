window.cmpConfig = {

  summon: "https://usadmm.dotomi.com/gdpr/check/json/current",
  brandingImg: "https://theweek.com/bundles/twsite/images/logo-tw-red.png",
  redirectURL: "/favicon.ico",
  siteId: "p-theweek.com",
  cssOverride: "https://theweek.com/css/gdpr.css",
  vendors:[24, 10, 11, 13, 25, 28, 32, 36, 52, 69, 77, 81, 132, 144, 164, 183,240],
  lang : "EN",
  localVendors : {

    // version to check to make sure we're up to date.
    version: "1.0.1",

    // List of providers as a hash keyed by the participant_id
    vendors: {

      // Participant object keyed by the participant_id.
      // Passed through in the api as participant_id.
      "1000":{

        // used only for the site
        isSite: true,

        // what will be displayed for the company's name
        name: "The Week",

        // List of integers that are ids for specific processing purposes based on Consent. 
        purposeIds: [1],
        // List of integers that are ids for specific processing purposes based on Legitimate Interest. 
       
        // list of critical urls, for allowing consent, disallowing consent and
        // a link to the company's privacy policy page
        urls:{
          policyUrl: "https://theweek.com/privacy",
          cookiesPolicy: "https://theweek.com/privacy",
          audit: "https://usadmm.dotomi.com/gdpr/audit/current"
        },
        
        // Name of the cookie to store consent value for the site
        // only used if "isSite" equals true.  This cookie will store the
        // consent value as a boolean (Y/N)
        consentCookieName: "euconsent_site"

      }
    }
  },

  // called on different consent accept statuses in case the publisher
  // wants to take specific actions.
  // This is optional and only needs to be defined if used.
  callbacks: {

    // Place all callback functions here.  Each will be called when certain phases complete

    onCMPShow: function() {

      // Called if the CMP is shown to the user
      console.log("onCMPShow()");
    },
    onConsentAll: function() {

      // when a user consents to all vendors
      console.log("onConsentAll()");
    },
    onNoConsentAll: function() {

      // when a user consents to no vendors
      console.log("onNoConsentAll()");
    },
    onConsentSome:function() {

      // when a user consents to some and not all vendors
      console.log("onConsentSome()");
    },
    onGDPRComplete: function() {

      // when the GDPR Consent Capture is complete
      console.log("onGDPRComplete()");
    },
    onCMPDismiss: function() {

      //called when CMP is dismissed, including the banner."
      console.log("onCMPDismiss()");
    }
  }
};