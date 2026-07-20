const uiIconMap = {
  mobile: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm4 16.25a1.25 1.25 0 1 0 0 .01V19.25zM9 6h6v10H9V6z" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a5 5 0 0 1 5 5v2h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h1V7a5 5 0 0 1 5-5zm3 7V7a3 3 0 0 0-6 0v2h6zm-3 3a2 2 0 0 1 1 3.73V18h-2v-2.27A2 2 0 0 1 12 12z" />
    </svg>
  ),
  otp: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 1 1-7.07 2.93A10 10 0 0 1 12 2zm1 5h-2v6l5 3 1-1.73-4-2.27V7z" />
    </svg>
  ),
  shieldCheck: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l8 4v6c0 5.25-3.67 9.76-8 10-4.33-.24-8-4.75-8-10V6l8-4zm-1 12.17-2.59-2.58L7 13l4 4 6-6-1.41-1.41L11 14.17z" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13 2l-2 6h4l-6 14 2-8H7l6-12z" />
    </svg>
  ),
  refresh: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.65 6.35A7.95 7.95 0 0 0 12 4V1L7 6l5 5V7a5 5 0 1 1-4.9 6H5.02A7 7 0 1 0 17.65 6.35z" />
    </svg>
  ),
  drden: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.3 4.2c2.3 0 4.3 1.3 5.2 3.4.5 1.1.3 2.4-.4 3.3-.6.8-1.4 1.2-2.4 1.2h-2.1c-1.2 0-2 .5-2.5 1.5-.4.8-.6 1.8-.6 2.9V20H7.9v-3.7c0-1.5.3-2.9 1-4.1 1-1.7 2.5-2.6 4.6-2.6h1.8c.5 0 .8-.1 1-.4.2-.3.2-.7 0-1.1-.5-1.2-1.7-1.9-3-1.9-1.6 0-2.9.8-3.8 2.3L7.3 7.1c1.4-1.9 3.5-2.9 6-2.9z" />
    </svg>
  )
};

function UiGlyph({ type }) {
  return <span className="ui-glyph">{uiIconMap[type]}</span>;
}

export default UiGlyph;
