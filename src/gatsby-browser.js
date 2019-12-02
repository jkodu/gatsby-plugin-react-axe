import React from 'react'
import ReactDOM from 'react-dom'

exports.onInitialClientRender = () => {
  console.log("Executed: onInitialClientRender")
  wireUpReactAxe(pluginOptions)
}

async function wireUpReactAxe(pluginOptions) {
  const { showInProduction, axeOptions } = {
    showInProduction: false,
    axeOptions: {},
    ...pluginOptions,
  }

  if (process.env.NODE_ENV === 'development' || showInProduction) {
    const { default: axe } = await import('react-axe')
    console.log("Run Axe")
    axe(React, ReactDOM, 1000, axeOptions)
  }
}