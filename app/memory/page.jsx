"use client"
import React, { useState } from 'react'
import PageHeader from "../components/PageHeader"
import PromptBox from "../components/PromptBox"
import Title from "../components/Title"
import TwoColumnLayout from "../components/TwoColumnLayout"
import pageHeader from "../components/PageHeader"
import ResultWithSources from "../components/ResultWithSources"
import "../globals.css"

const Memory = () => {
  return (
    <Title
      headingText={"Memory"}
      emoji={"🧠"}
    />
  )
}

export default Memory
