# Canopy MLS property-search integration roadmap

The website now displays the approved Canopy Matrix IDX search at `https://matrix.canopymls.com/Matrix/public/IDX.aspx?idx=224d3725`. The environment setting remains available as an override if the IDX page changes later.

## Recommended launch path: Matrix frameable IDX

This is the fastest route and Canopy states that the Matrix frameable search is available to active Member Participants and Subscribers at no additional charge.

1. Confirm the website is under the actual and apparent control of the participating brokerage. The brokerage branding must be at least as prominent as any agent or team branding.
2. Sign in to Canopy Matrix.
3. Open the menu next to the account name, then select **Settings > IDX Configuration**.
4. Select **New IDX Page**, choose **Search**, enable IDX, choose the colors and button style, and save.
5. Copy the frameable URL from between the quotation marks in the HTML Canopy provides.
6. Add it to the deployment environment:

   ```text
   NEXT_PUBLIC_CANOPY_IDX_URL=https://the-approved-matrix-idx-url
   ```

7. Redeploy the site. The prepared `PropertySearch` component will replace the holding state with the live search automatically.
8. Test Charlotte, Concord, Mooresville, and Hickory searches on desktop and mobile. Confirm listing attribution, brokerage branding, detail pages, lead routing, and status changes all appear as Canopy supplies them.

Official instructions: [Canopy MLS Internet Data Exchange program](https://support.canopymls.com/kb/article/331-canopy-mls-internet-data-exchange-idx-program/) and [Matrix IDX configuration](https://support.canopymls.com/kb/article/318-matrix-idx-configuration/).

## Later upgrade: custom branded search through MLS Grid

Use this route only when VKR needs custom listing cards, map search, saved searches, SEO-friendly property pages, or deeper CRM workflows that the Matrix frame does not provide.

1. Select a Canopy-compatible data technology vendor or register the website developer as a vendor with MLS Grid.
2. The vendor creates the MLS Grid subscription and signs the Master Data License Agreement.
3. The Canopy Participant and Subscriber sign electronically.
4. Canopy reviews the website, branding, display behavior, and compliance before approving the feed.
5. Keep the MLS Grid access token server-side only. Map the RESO fields into a normalized listing model, sync at the frequency required by the current IDX rules, and remove or update listings as the feed changes.
6. Build search, listing detail, attribution, listing-broker identification, disclaimers, DMCA notice, privacy, and monitoring around the current Canopy IDX rules.
7. Run a compliance review before launch and after meaningful display changes.

As of September 2026, Canopy lists a direct IDX data-feed license at a $500 setup fee and $100 per month, excluding any vendor, hosting, CRM, or development cost. Confirm current pricing and rules before signing.

Official sources: [Canopy MLS data licensing](https://go.canopymls.com/data/), [current IDX rules](https://brokerrelations.canopyrealtors.com/mls-compliance-training/rules-regulations/), and [vendors currently pulling Canopy IDX data](https://support.canopymls.com/kb/article/442-vendors-pulling-canopy-mls-idx-data/).

## Remaining launch checks

- Confirmation of the participating brokerage name that Canopy requires to be prominent on IDX pages.
- The preferred email/CRM destination for property-search leads.

Do not place Matrix credentials, MLS Grid tokens, or any private MLS login in a `NEXT_PUBLIC_` variable. Only the public, approved Matrix frameable URL belongs in `NEXT_PUBLIC_CANOPY_IDX_URL`.
