"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("83acb701-44a5-492d-9c0c-4c861bef58cc")
    }, [])

  return null
}

export default CrispChat