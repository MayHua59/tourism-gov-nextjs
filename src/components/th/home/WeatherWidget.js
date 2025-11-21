"use client"

import React, { useEffect, useRef } from "react";

export default function WeatherWidget() {
  const widgetRef = useRef(null);

  useEffect(() => {
    // If the script already exists, do not add it again
    if (!document.getElementById("weatherwidget-io-js")) {
      const script = document.createElement("script");
      script.id = "weatherwidget-io-js";
      script.src = "https://weatherwidget.io/js/widget.min.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If the script exists, manually dispatch an event to refresh widgets
      if (window.__weatherwidget_init) {
        window.__weatherwidget_init();
      }
    }
  }, []);

  return (
    <a
      className="weatherwidget-io"
      href="https://forecast7.com/en/16d8796d20/yangon/"
      data-label_1=""
      data-label_2="WEATHER FORECAST"
      data-theme="original"
      ref={widgetRef}
      style={{ display: "inline-block", minWidth: 250, minHeight: 60 }}
    >
      WEATHER FORECAST
    </a>
  );
}

