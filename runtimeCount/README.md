# Count your project's total execution time

About a month ago I started having some serious issues with my Google Apps Script projects. I was getting a lot of “Service using too much computer time for one day” errors. And I mean **a lot**! My Gmail inbox wouldn’t shut up. A quick Google search revealed [this ticket](https://code.google.com/p/google-apps-script-issues/issues/detail?id=6213&can=1&colspec=Stars%20Opened%20ID%20Type%20Status%20Summary%20Component%20Owner) with the following response:

> There was a recent change to quota enforcement to fix a bug where triggers were incorrectly being accounted for. Effectively, scripts using triggers were given more execution quota than they should have been allowed.
>
> The issue has been fixed, but the side effect is that some scripts that were previously exceeding quota are now seeing triggers intermittently skipped. This is correct behavior.

So it turned out I suck at writing efficient scripts. Even more than I previously thought. In order to properly assess the situation I had to come up with a plan to find the culprit. Unfortunately Google doesn’t provide the information about resources being currently used by our projects; we just know what the [quotas](https://script.google.com/dashboard) are:

**Triggers total runtime**
- 1 hours / day (Consumer)
- 3 hours / day (Google Apps for Your Domain)
- 6 hours / day (Google Apps for Biz/Edu/Gov)

So I wrote this script that counts the total daily execution time of a whole Google Apps Script Project, records it once a day in a sheet named “Runtime” (in milliseconds) and resets the property.

This helped me find the most problematic projects and work on their speed and efficiency. With all this data in various “Runtime” sheets you could quite easily create a dashboard containing all of your projects’ historical data which would help keep the execution time under control.
