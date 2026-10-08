<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Prerender the public landing route for static hosting; its HTML contains no visitor-specific data and can be deployed without a server.
- Pin Nitro output directories for self-hosted builds so Netlify and sandbox exports share the same static publish directory.
- Use the shared Button CTA variant for WhatsApp links so both regular and fixed controls retain consistent focus and wrapping behavior.
- Add scroll reveals after hydration with IntersectionObserver and keep content visible without JavaScript or with reduced motion enabled.
- Netlify build command unsets NETLIFY so nitro does not auto-select its netlify preset, which breaks the prerender server entry.
