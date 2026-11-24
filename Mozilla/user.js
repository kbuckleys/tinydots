/* ┌─┐┌─┐┌┐┌┬ ┬┌─┐┬─┐┬┌─┌─┐
   ┌─┘├┤ │││││││ │├┬┘├┴┐└─┐
   └─┘└─┘┘└┘└┴┘└─┘┴└─┴ ┴└─┘
   https://github.com/kbuckleys/ */

// user.js: telemetry / data-collection prefs for Firefox 160.0.1
//
// Every key here was checked against the Firefox 160.0.1 source (tag
// FIREFOX_160_0_1_RELEASE). Keys that no longer exist were left out.
//
// Put this file in your profile folder (next to prefs.js) and restart Firefox.
// It is re-applied on every start, so about:config can't drift back.
// Don't edit prefs.js itself while Firefox is running: it gets overwritten on exit.

// ---- Master switches (Glean upload + legacy Telemetry + usage ping) ----
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.usage.uploadEnabled", false);

// ---- Legacy Telemetry pings ----
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.healthping.enabled", false);
user_pref("toolkit.telemetry.user_characteristics_ping.opt-out", true);

// ---- New tab / Firefox Home ----
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.ping.enabled", false);
user_pref("browser.newtabpage.activity-stream.telemetry.privatePing.enabled", false);
user_pref("browser.newtabpage.activity-stream.telemetry.privatePing.dwellTime.enabled", false);
user_pref("browser.newtabpage.activity-stream.telemetry.privatePing.inferredInterests.enabled", false);

// ---- Search ----
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);

// ---- Studies / experiments / remote config of features ----
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("nimbus.rollouts.enabled", false);

// ---- Crash reports ----
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// ---- Firefox Account / Sync pings ----
user_pref("identity.fxaccounts.telemetry.clientAssociationPing.enabled", false);
user_pref("identity.fxaccounts.telemetry.clientInfoPing.enabled", false);

// ---- Other data collection ----
user_pref("browser.discovery.enabled", false);
user_pref("captchadetection.actor.enabled", false); // telemetry-only feature

// ---- Sponsored tiles / ad impression plumbing (optional block) ----
// browser.topsites.contile.lastFetch in your prefs.js was updated on the last
// start even with the new tab page disabled, so Contile is still being contacted.
user_pref("browser.topsites.contile.enabled", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

// ---- Pinned for userChrome.css / userContent.css ----
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// ---- Deliberately NOT included (gone or inert in 160) ----
// toolkit.telemetry.enabled                      build-time locked on release builds
// toolkit.telemetry.unified                      vestigial, nothing meaningful reads it
// toolkit.telemetry.coverage.opt-out, toolkit.coverage.*   not found in 160 source
// browser.search.serpEventTelemetryCategorization.regionEnabled   not found in 160 source
// messaging-system.rsexperimentloader.enabled    not found as a toggle in 160 source
// datareporting.healthreport.service.enabled, datareporting.sessions.*,
// browser.ping-centre.telemetry, toolkit.telemetry.hybridContent.enabled  long gone
