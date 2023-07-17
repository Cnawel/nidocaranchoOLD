.highlight-wrapper {
    display: block;
  }
  
  /* Start: Turn off individual column border, margin, and padding when line numbers are showing */
  .highlight-wrapper .lntd pre {
      padding: 0;
  }
  
  .chroma .lntd pre {
      border: 0px solid #ccc;
  }
  
  .chroma .lntd:first-child {
    padding: 7px 7px 7px 10px;
    margin: 0;
  }
  
  .chroma .lntd:last-child {
    padding: 7px 10px 7px 7px;
    margin: 0;
  }
  /* End: Turn off individual column border, margin, and padding when line numbers are showing */
  
  .highlight {
    position: relative;
    z-index: 0;
    padding: 0;
    margin:40px 0 10px 0;
    border-radius: 4px;
  }
  
  .highlight > .chroma {
    position: static;
    z-index: 1;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 10px;
  }
  
  .copy-code-button {
    position: absolute;
    z-index: 2;
    right: 0;
    top: -29px;
    font-size: 13px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0.5px;
    width: 65px;
    color: #ffffff;
    background-color: #000000;
    border: 1.25px solid #232326;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    white-space: nowrap;
    padding: 6px 6px 7px 6px;
    margin: 0 0 0 1px;
    cursor: pointer;
    opacity: 0.6;
  }
  
  .copy-code-button:hover,
  .copy-code-button:focus,
  .copy-code-button:active,
  .copy-code-button:active:hover {
    color: #222225;
    background-color: #b3b3b3;
    opacity: 0.8;
  }
  
  .copyable-text-area {
    position: absolute;
    height: 0;
    z-index: -1;
    opacity: .01;
  }
  .chroma [data-lang]:before {
    position: absolute;
    z-index: 0;
    top: -29px;
    left: 0;
    content: attr(data-lang);
    font-size: 13px;
    font-weight: 700;
    color: white;
    background-color: black;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 6px 6px 7px 6px;
    line-height: 14px;
    opacity: 0.6;
    position: absolute;
    letter-spacing: 0.5px;
    border: 1.25px solid #232326;
    margin: 0 0 0 1px;
  }
  