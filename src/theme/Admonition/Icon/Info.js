import React from 'react';

export default function AdmonitionIconInfo(props) {
  return (
    <svg viewBox="0 0 32 32" width="800" height="800" {...props}>
      <path
        fillRule="evenodd"
        d="M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8Z"
      />
      <path
        fillRule="evenodd"
        d="M16 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"
      />
      <path
        fill="none"
        d="M0 0h32v32H0z"
      />
    </svg>
  );
}
